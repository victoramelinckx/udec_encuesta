const SibApiV3Sdk = require('sib-api-v3-sdk');


const apiKey = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;
const listId = 2;

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKeyInstance = defaultClient.authentications['api-key'];
apiKeyInstance.apiKey = apiKey;

const apiInstance = new SibApiV3Sdk.ContactsApi();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const contact = {
      email,
      listIds: [parseInt(listId)],
      updateEnabled: true,
    };

    try {
      await apiInstance.createContact(contact);
      res.status(200).json({ message: 'Email subscribed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error subscribing email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

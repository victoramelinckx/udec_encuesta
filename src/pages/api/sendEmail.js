import SibApiV3Sdk from 'sib-api-v3-sdk';

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { toEmail, textContent } = req.body;

    try {
      const sendSmtpEmail = {
        to: [{ email: toEmail }],
        subject: 'Resultados de mi encuesta',
        textContent: textContent,
        sender: { name: 'Content Wuor', email: 'vickx2000@gmail.com' },
      };

      const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
      res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

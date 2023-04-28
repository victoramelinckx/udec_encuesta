// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      const apiKey = '1f27e4024423aab49f54879cbe4de37a-us17';
      const listId = 'ca6fc31049';
      const mailchimpURL = `https://us17.api.mailchimp.com/3.0/lists/${listId}/members`;

      await axios({
        method: 'post',
        url: mailchimpURL,
        data: {
          email_address: email,
          status: 'subscribed',
        },
        headers: {
          Authorization: `apikey ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      return res.status(200).json({ success: 'Email added to MailChimp.' });
    } catch (error) {
      console.error('Error adding email to MailChimp:', error.response.data);
      return res.status(500).json({ error: 'Failed to add email to MailChimp' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

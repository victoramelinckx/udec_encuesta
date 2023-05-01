const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = async (toEmail, textContent) => {
  try {
    const sendSmtpEmail = {
      to: [{ email: toEmail }],
      subject: 'Resultados de mi encuesta',
      textContent: textContent,
      sender: { name: 'Content Wuor', email: 'vickx2000@gmail.com' },
    };

    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return response;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

export default sendEmail;

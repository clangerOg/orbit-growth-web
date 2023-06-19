import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function ContactAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email } = req.body;

  const mailersend = new MailerSend({
    apiKey:
      'mlsn.bdc82ce1b4b006f29003e13c653d5a56e0ae1311a80cc04220ed555b73db9344',
  });

  const recipients = [
    new Recipient(
      'c.langer@mailsender.orbitgrowth.de',
      'Christoph (Empfaenger)'
    ),
  ];

  const personalization = [
    {
      email: 'c.langer@mailsender.orbitgrowth.de',
      data: {
        email: email,
        lastName: lastName,
        firstName: firstName,
        account_name: 'ACCOUNT NAME',
        support_email: 'SUPPORT MAIL',
      },
    },
  ];

  const sender = new Sender(
    'inquiry@mailsender.orbitgrowth.de',
    'Kontaktanfragen (Webseite)'
  );

  const emailParams = new EmailParams()
    .setFrom(sender)
    .setTo(recipients)
    .setSubject('Neue Kontaktanfrage über die Webseite!')
    .setTemplateId('0p7kx4xmw58l9yjr')
    .setPersonalization(personalization);

  try {
    const response = await mailersend.email.send(emailParams);

    return res.status(response.statusCode).json(JSON.stringify(response));
  } catch (error) {
    return res.status(500).json(JSON.stringify(error));
  }
}

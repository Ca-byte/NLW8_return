import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bf4f05fee390b2",
      pass: "5952857174f2b8"
    }
});
export class NodeMaileirMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
       await transport.sendMail({
        from: 'Team Feedget <oi@feedget.com>',
        to: 'Caroline Vieira <carolinesanvieira@gmail.com>',
        subject,
        html: body,

    });
       
   } 
}
import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor(private readonly mailerService: NestMailerService) {}

  async sendMail(to: string, subject: string, template: string, context: any) {
    return await this.mailerService.sendMail({
      to,
      subject,
      template,
      context,
    });
  }

  async sendBatch(emails: { to: string; subject: string; context: any }[]) {
    const promises = emails.map((email) =>
      this.sendMail(email.to, email.subject, 'email-template', email.context),
    );
    await Promise.all(promises);
  }
}

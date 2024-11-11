import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { MailerRepository } from './mailer.repository';

@Injectable()
export class MailerService {
  constructor(
    private readonly mailerService: NestMailerService,
    private readonly mailerRepository: MailerRepository,
  ) {}

  async sendMail(to: string, subject: string, template: string, context: any) {
    console.log('context', context);
    const email = await this.mailerRepository.saveEmail(
      to,
      subject,
      template,
      false,
    );
    console.log('email', email);
    // const resultMailer = await this.mailerService.sendMail({
    //   to,
    //   subject,
    //   template,
    //   context,
    // });
    const resultMailer = { test: 'test' };
    const updatedEmail = await this.mailerRepository.updateEmail(
      email.id,
      true,
      JSON.stringify(resultMailer),
    );
    console.log('updatedEmail', updatedEmail);
    return updatedEmail;
  }

  async sendBatch(emails: { to: string; subject: string; context: any }[]) {
    const promises = emails.map((email) =>
      this.sendMail(email.to, email.subject, 'email-template', email.context),
    );
    await Promise.all(promises);
  }
}

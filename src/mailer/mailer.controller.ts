import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mail')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  async sendEmail(@Body() body: any) {
    const { to, subject, context } = body;
    return this.mailerService.sendMail(to, subject, 'email-template', context);
  }

  @Post('send-batch')
  async sendBatch(@Body() body: any) {
    const { emails } = body;
    return this.mailerService.sendBatch(emails);
  }
}

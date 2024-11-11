import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { MailerModule as MailModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './email.entity';
import { MailerRepository } from './mailer.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Email]),
    MailModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get('SMTP_HOST'),
          port: config.get<number>('SMTP_PORT'),
          secure: config.get<boolean>('SMTP_SECURE'),
          auth: {
            user: config.get('SMTP_USER'),
            pass: config.get('SMTP_PASS'),
          },
        },
        defaults: {
          from: '"No Reply" <noreply@example.com>',
        },
        template: {
          dir: path.join(process.cwd(), 'src', 'mailer', 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [MailerController],
  providers: [MailerService, MailerRepository],
  exports: [MailerService, MailerRepository],
})
export class MailerModule {}

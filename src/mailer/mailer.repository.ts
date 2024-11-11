import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Email } from './email.entity';

@Injectable()
export class MailerRepository {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  async saveEmail(
    recipient: string,
    subject: string,
    message: string,
    sent: boolean,
  ): Promise<Email> {
    const email = this.emailRepository.create({
      recipient,
      subject,
      message,
      sent,
    });
    return await this.emailRepository.save(email);
  }

  async updateEmail(
    id: number,
    sent: boolean,
    response: string,
  ): Promise<UpdateResult> {
    return await this.emailRepository.update(id, { sent, response });
  }
}

import { Module } from '@nestjs/common';
import { MailerModule } from './mailer/mailer.module';
import { getDatabaseConfig } from './config/db.config';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getDatabaseConfig,
    }),
    MailerModule,
  ],
})
export class AppModule {}

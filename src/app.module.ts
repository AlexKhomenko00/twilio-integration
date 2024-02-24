import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { twilioConfig } from './config/twilio.config';
import { SmsController } from './sms/sms.controller';
import { TwilioModule } from './twilio';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [twilioConfig],
    }),
    TwilioModule.register({
      useFactory: async (config: ConfigType<typeof twilioConfig>) => ({
        accountSid: config.accountSid,
        verificationSid: config.verificationSid,
        token: config.token,
        twilioSenderPhoneNumber: config.twilioSenderPhoneNumber,
      }),
      inject: [twilioConfig.KEY],
    }),
  ],
  controllers: [SmsController],
  providers: [],
})
export class AppModule {}

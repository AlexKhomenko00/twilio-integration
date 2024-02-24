import { Inject, Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { TwilioException } from './exception/twilio-exception';
import { TwilioExceptionCode } from './exception/twilio-exception-code.enum';
import { TwilioOptions } from './interface/twilio-register-module-options.interface';
import { TWILIO_MODULE_OPTIONS } from './twilio.constants';

@Injectable()
export class TwilioSmsService {
  private readonly twilioClient: Twilio;

  constructor(
    @Inject(TWILIO_MODULE_OPTIONS) private readonly options: TwilioOptions,
  ) {
    this.twilioClient = new Twilio(options.accountSid, options.token, {
      autoRetry: true,
      maxRetries: 5,
    });
  }

  async initSmsPhoneNumberVerificationCode(phoneNumber: string) {
    return await this.twilioClient.verify._v2
      .services(this.options.verificationSid)
      .verifications.create({ to: phoneNumber, channel: 'sms' });
  }

  async verifyPoneNumberVerificationCode(phoneNumber: string, code: string) {
    const result = await this.twilioClient.verify._v2
      .services(this.options.verificationSid)
      .verificationChecks.create({ to: phoneNumber, code: code });

    if (!result.status || result.status !== 'approved') {
      throw new TwilioException(TwilioExceptionCode.WRONG_VERIFICATION_CODE);
    }
  }

  async sendSms(to: string, body: string) {
    return await this.twilioClient.messages.create({
      body,
      from: this.options.twilioSenderPhoneNumber,
      to,
    });
  }
}

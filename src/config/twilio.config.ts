import { registerAs } from '@nestjs/config';
import { TwilioOptions } from 'src/twilio';

export const twilioConfig = registerAs<TwilioOptions>('twilio', () => ({
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  verificationSid: process.env.TWILIO_VERIFICATION_SID,
  token: process.env.TWILIO_AUTH_TOKEN,
  twilioSenderPhoneNumber: process.env.TWILIO_SENDER_PHONE_NUMBER,
}));

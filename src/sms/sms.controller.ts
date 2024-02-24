import { Body, Controller, Post } from '@nestjs/common';
import { TwilioSmsService } from 'src/twilio';
import { PhoneNumberDto } from './dto/phone-number.dto';
import { SmsDto } from './dto/sms.dto';
import { VerificationCodeDto } from './dto/verification-code.dto';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: TwilioSmsService) {}

  @Post('initiate-verification')
  async initiatePhoneNumberVerification(@Body() dto: PhoneNumberDto) {
    await this.smsService.initSmsPhoneNumberVerificationCode(dto.phoneNumber);
  }

  @Post('verify')
  async verifyPhoneNumber(@Body() dto: VerificationCodeDto) {
    await this.smsService.verifyPoneNumberVerificationCode(
      dto.phoneNumber,
      dto.code,
    );
  }

  @Post('send-sms')
  async sendSms(@Body() dto: SmsDto) {
    await this.smsService.sendSms(dto.phoneNumber, dto.message);
  }
}

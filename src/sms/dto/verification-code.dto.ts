import { IsString } from 'class-validator';
import { IsValidPhoneNumber } from 'src/twilio';

export class VerificationCodeDto {
  @IsValidPhoneNumber()
  phoneNumber: string;

  @IsString()
  code: string;
}

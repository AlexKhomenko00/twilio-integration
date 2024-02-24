import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { IsValidPhoneNumber } from 'src/twilio';

export class SmsDto {
  @IsValidPhoneNumber()
  phoneNumber: string;

  @MaxLength(160)
  @IsNotEmpty()
  @IsString()
  message: string;
}

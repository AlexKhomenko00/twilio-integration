import { IsValidPhoneNumber } from 'src/twilio';

export class PhoneNumberDto {
  @IsValidPhoneNumber()
  phoneNumber: string;
}

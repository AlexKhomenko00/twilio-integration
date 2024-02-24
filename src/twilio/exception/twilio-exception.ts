import { TwilioExceptionCode } from './twilio-exception-code.enum';

export class TwilioException extends Error {
  constructor(code: TwilioExceptionCode) {
    super(code);
  }
}

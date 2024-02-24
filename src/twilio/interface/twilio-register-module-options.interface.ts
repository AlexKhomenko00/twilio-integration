import { ModuleMetadata } from '@nestjs/common';

export interface TwilioOptions {
  accountSid: string;
  verificationSid: string;
  token: string;
  twilioSenderPhoneNumber: string;
}

export interface TwilioRegisterModuleOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory(...args: any[]): Promise<TwilioOptions> | TwilioOptions;
  inject?: any[];
}

import { DynamicModule, Module, Provider } from '@nestjs/common';
import { TwilioRegisterModuleOptions } from './interface/twilio-register-module-options.interface';
import { TWILIO_MODULE_OPTIONS } from './twilio.constants';
import { TwilioSmsService } from './twilio.service';

@Module({})
export class TwilioModule {
  static register(options: TwilioRegisterModuleOptions): DynamicModule {
    const optionsProvider = this.createRegisterOptionsProvider(options);

    return {
      module: TwilioModule,
      imports: options.imports,
      providers: [optionsProvider, TwilioSmsService],
      exports: [TwilioSmsService],
    };
  }

  private static createRegisterOptionsProvider(
    options: TwilioRegisterModuleOptions,
  ): Provider {
    return {
      provide: TWILIO_MODULE_OPTIONS,
      useFactory: (...args: any[]) => options.useFactory(...args),
      inject: options.inject || [],
    };
  }
}

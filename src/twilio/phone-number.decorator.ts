import { IsNotEmpty, IsString, Matches } from 'class-validator';

export function IsValidPhoneNumber(): PropertyDecorator {
  return (target, propertyName) => {
    IsString()(target, propertyName);
    IsNotEmpty()(target, propertyName);
    Matches(/^\+[1-9]\d{1,14}$/);
  };
}

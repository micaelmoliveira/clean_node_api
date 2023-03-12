import { type EmailValidator } from '../presentation/protocols/email-validator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean | Error {
    return false
  }
}

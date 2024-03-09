import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';


@Pipe({
  name: 'passwordStrength',
  standalone: true
})
export class PasswordStrengthPipe implements PipeTransform {
  transform(value?: ValidationErrors | null | undefined): string {
    return value ? value['required'] ? '':value['password'] || '':'strong';
  }
}

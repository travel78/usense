import { AbstractControl } from '@angular/forms';

type TPasswordError = {
  password: 'error' | 'easy' | 'medium';
}

export function password(control: AbstractControl): null | TPasswordError {
  const strong: RegExp = /(?=.*?\p{L})(?=.*?\p{N})(?=.*?\p{S}).{8,}/u;
  const medium: RegExp = /((?=.*?\p{L})(?=.*?\p{S})|(?=.*?\p{L})(?=.*?\p{N})|(?=.*?\p{S})(?=.*?\p{N})).{8,}/u;
  const easy: RegExp = /[(?=.*?\p{L})|(?=.*?\p{N})|(?=.*?\p{S})].{8,}/u;

  const controlValue: string = control.value;
  switch (true) {
    case strong.test(controlValue):
      return null;
    case medium.test(controlValue):
      return { password: 'medium' };
    case easy.test(controlValue):
      return { password: 'easy' };
    default:
      return { password: 'error'};
  }
}

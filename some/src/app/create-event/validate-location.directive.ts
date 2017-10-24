import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateLocationDirective, multi: true}]
})
export class ValidateLocationDirective implements Validator {

  public constructor() { }
  public validate(formGroup: FormGroup): { [kety: string]: any} {
    const addressControl: AbstractControl = formGroup.controls['address'];
    const cityControl: AbstractControl = formGroup.controls['city'];
    const countryControl: AbstractControl = formGroup.controls['country'];
    const onlineUrlControl: AbstractControl = (formGroup.root as FormGroup).controls['onlineUrl'];
    if ((addressControl && addressControl.value && cityControl && cityControl.value
      && countryControl && countryControl.value)
      || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return {validateLocation: false};
    }
  }
}

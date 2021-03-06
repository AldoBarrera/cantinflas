import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Controls } from './controls';

@Injectable()
export class ControlsService {
  constructor() { }

  toFormGroup(controls: Controls<any>[] ) {
    let group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', [Validators.required])
                                              : new FormControl(control.value || '');
      group[control.key].controlType = control.controlType;

      if (control.controlType == 'file') {
        group[control.key+'file'] = new FormControl(control.value || '');
      }
    });
    return new FormGroup(group);
  }

  resetFormGroup(controls: Controls<any>[] ) {
    

    controls.forEach(control => {
      control.reset();
    });
  }
}



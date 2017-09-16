import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {

  constructor() { }

  success(msg: string, title?: string) {
    // no such global var -> because we didn't import toastr-files 
    // how to do this ? 
    // declare ? 
    toastr.success(msg, title);
  }

  info(msg: string, title?: string) {
    toastr.info(msg, title);
  }

  warning(msg: string, title?: string) {
    toastr.warning(msg, title);
  }

  error(msg: string, title?: string) {
    toastr.error(msg, title);
  }

}

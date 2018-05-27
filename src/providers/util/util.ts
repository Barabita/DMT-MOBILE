import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastController} from "ionic-angular";


@Injectable()
export class UtilProvider {

  constructor( private toast: ToastController) {
    console.log('Hello UtilProvider Provider');
  }

  message(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}

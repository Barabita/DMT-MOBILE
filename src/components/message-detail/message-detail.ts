import {Component} from '@angular/core';
import {Message} from "../../domain/Message";
import {NavParams, ViewController} from "ionic-angular";

/**
 * Generated class for the MessageDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-detail',
  templateUrl: 'message-detail.html'
})
export class MessageDetailComponent {

  mesaj: Message;
  text: string;

  constructor(params: NavParams, private  viewCtrl: ViewController) {

    this.mesaj = params.data.list.data;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}

import {Component} from '@angular/core';
import {Notification} from "../../domain/Notification";
import {NavParams, ViewController} from "ionic-angular";

/**
 * Generated class for the NotificationDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-detail',
  templateUrl: 'notification-detail.html'
})
export class NotificationDetailComponent {

  notification: Notification;

  constructor(params: NavParams, private  viewCtrl: ViewController) {
    this.notification = params.data.data;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}

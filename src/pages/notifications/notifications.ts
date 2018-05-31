import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Notification} from "../../domain/Notification";
import {NotificationDetailComponent} from "../../components/notification-detail/notification-detail";
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  notificationList: Notification[] = [];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
              public navParams: NavParams, private  api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this.fetchNotificationList();
  }


  async fetchNotificationList() {
    let data = await this.api.getNotifications().then(res => {
      this.prepareList(res);
    });
  }

  prepareList(res: any) {
    if (res != null && res.length > 0) {
      res.forEach(item => {
        let not = new Notification();
        not.content = item.content;
        not.receiverType = item.receiverType;
        not.sender = item.sender;
        not.title = item.title;
        this.notificationList.push(not);
      })
    }
  }

  public detayaGit(event, data) {
    let list = {data: data};
    let detailComponent = this.modalCtrl.create(NotificationDetailComponent, list);
    detailComponent.present();
  }

}

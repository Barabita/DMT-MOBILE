import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {MessageDetailComponent} from "../../components/message-detail/message-detail";
import {Message} from "../../domain/Message";


@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  messageList: Message[] = [];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
              public navParams: NavParams, private  api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    this.prepareMessageList();
  }

  async prepareMessageList() {
    let data = await this.api.getMessages().then(res => {
      this.prepareList(res);
    });
  }

  prepareList(list: any) {
    if (list != null && list.length > 0) {
      list.forEach(item => {
        let message = new Message();
        message.daysOfWeek = item.id.daysOfWeek;
        message.eventHours = 2;
        message.startTime = item.id.eventStartTime;
        message.instructorName = item.instructorName + " " + item.instructorSurname;
        message.lectureCode = item.lectureCode;
        message.lectureName = item.lectureName;
        message.place = item.place;
        this.messageList.push(message);

      })
    }
  }


  public detayaGit(event, data) {
    let list = {data: data};
    let detailComponent = this.modalCtrl.create(MessageDetailComponent, list);
    detailComponent.present();
  }

}

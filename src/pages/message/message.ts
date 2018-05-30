import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {MessageDetailComponent} from "../../components/message-detail/message-detail";
import {Message} from "../../domain/Message";

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  messageList: Message[] = [];
  constructor(public navCtrl: NavController,private modalCtrl: ModalController,
              public navParams: NavParams, private  api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }


  public detayaGit(event, data){
    let list = {data: data};
    let detailComponent = this.modalCtrl.create(MessageDetailComponent, list);
    detailComponent.present();
  }

}

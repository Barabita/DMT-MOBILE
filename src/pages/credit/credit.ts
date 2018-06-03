import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../domain/User";
import {ApiProvider} from "../../providers/api/api";
import {Grade} from "../../domain/Grade";

/**
 * Generated class for the CreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {

  user: User;
  gradeList: Grade[] = [];
  totalCredit: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditPage');
    this.prepareDataList();
  }

  async prepareDataList() {
    let data = await this.api.getGrades();
    data.forEach(item => {
      this.totalCredit += item.credit;
      this.gradeList.push(item);
      console.log(item);
    });
  }

}

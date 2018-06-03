import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {Grade} from "../../domain/Grade";


@IonicPage()
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html',
})
export class GradePage {

  gradeList: Grade[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private  api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradePage');
    this.prepareDataList();
  }

  async prepareDataList() {
    let data = await this.api.getGrades();
    data.forEach(item => {
      item.visa1 = item.visa1 == -1 ? null : item.visa1;
      item.visa2 = item.visa2 == -1 ? null : item.visa2;
      item.finalResult = item.finalResult == -1 ? null : item.finalResult;
      this.gradeList.push(item);
      console.log(item);
    });
  }

}

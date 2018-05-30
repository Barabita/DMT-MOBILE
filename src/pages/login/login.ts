import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {UtilProvider} from "../../providers/util/util";
import {ApiProvider} from "../../providers/api/api";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userCode: string;
  password: string;

  constructor(public navCtrl: NavController, private  util: UtilProvider, private  api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    let user = await this.api.login(this.userCode, this.password);
    if (this.userCode == "admin" && this.password == "adm123") {
      this.navCtrl.push(TabsPage);
    } else {
      this.util.message("Kullanıcı Adı  yada Şifre hatalı. Tekrar giriş yapmayı deneyin.")
    }
  }

}

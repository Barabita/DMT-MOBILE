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
    let userList = await this.api.login(this.userCode, this.password);
    let user;
    if (userList.length > 0) {
      user = userList[0];
    }
    if (user != null && this.userCode == user.email && this.password == user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      this.navCtrl.push(TabsPage);
    } else {
      this.util.message("Kullanıcı Adı  yada Şifre hatalı. Tekrar giriş yapmayı deneyin.")
    }
  }

}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {UtilProvider} from "../../providers/util/util";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userCode: string;
  password: string;

  constructor(public navCtrl: NavController, private  util: UtilProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if (this.userCode == "admin" && this.password == "adm123") {
      this.navCtrl.push(TabsPage);
    } else {
      this.util.message("Kullanıcı Adı  yada Şifre hatalı. Tekrar giriş yapmayı deneyin.")
    }
  }

}

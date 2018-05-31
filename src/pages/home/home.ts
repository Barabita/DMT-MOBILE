import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {User} from "../../domain/User";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: User;

  constructor(public navCtrl: NavController) {

    this.user = JSON.parse(localStorage.getItem("user"));
  }

}

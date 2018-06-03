import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {NotificationsPage} from "../notifications/notifications";
import {MessagePage} from "../message/message";
import {GradePage} from "../grade/grade";
import {CreditPage} from "../credit/credit";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotificationsPage;
  tab3Root = MessagePage;
  tab4Root = GradePage;
  tab5Root = CreditPage;

  constructor() {

  }
}

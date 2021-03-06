import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {UtilProvider} from '../providers/util/util';
import {ApiProvider} from '../providers/api/api';
import {MessagePage} from "../pages/message/message";
import {NotificationsPage} from "../pages/notifications/notifications";
import {HttpClientModule} from "@angular/common/http";
import {MessageDetailComponent} from "../components/message-detail/message-detail";
import {NotificationDetailComponent} from "../components/notification-detail/notification-detail";
import {GradePage} from "../pages/grade/grade";
import {CreditPage} from "../pages/credit/credit";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MessagePage,
    NotificationsPage,
    MessageDetailComponent,
    NotificationDetailComponent,
    GradePage,CreditPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MessagePage,
    NotificationsPage,
    MessageDetailComponent,
    NotificationDetailComponent,
    GradePage,
    CreditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilProvider,
    ApiProvider
  ]
})
export class AppModule {
}

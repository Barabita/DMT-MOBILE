import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Headers} from "@angular/http";
import {Header} from "ionic-angular";
import {HttpHeaders} from "@angular/common/http";

/*
 Generated class for the ApiProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class ApiProvider {

  private baseUrl: string = "http://localhost:8080/api/";
  private messageUrl: string = this.baseUrl + "message/bessie@breece.com";
  private loginUrl: string = this.baseUrl + "login/";
  private notificationUrl: string = this.baseUrl + "notification/regana@bristow.com";
  private header: HttpHeaders;

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
    this.header =new HttpHeaders({
      'Content-Type': 'application/json',
      'accessToken': localStorage.getItem("123123")
    })
  }


  async login(email: string, password: string): Promise<any> {
    let data = await this.http.get(this.loginUrl + email + "/" + password).toPromise();
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  }

  async getMessages(): Promise<any> {
    let data = await this.http.get(this.messageUrl).toPromise();
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  }

  async getNotifications(): Promise<any> {
    let data = await this.http.get(this.notificationUrl).toPromise();
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  }


}

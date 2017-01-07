import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

/*
  Generated class for the MyDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-my-demo',
    templateUrl: 'my-demo.html'
})
export class MyDemoPage {
    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {

    }

    openBrowser() {
        let browser = new InAppBrowser(encodeURI("https://www.phew.tw/post/fe8d0349ec9f4f38a671487fe3b930ad"), "_blank");
    }

}

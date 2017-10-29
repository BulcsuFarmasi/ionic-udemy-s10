import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { UsersPage } from '../users/users'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersPage = UsersPage;

  constructor(public navCtrl: NavController, private platform:Platform) {
      console.log(this.platform.platforms());
      if (this.platform.is('ios')) {
        // Only executed on iOS
      }
      console.log(this.platform.height());
      console.log(this.platform.width());
      console.log(this.platform.isLandscape());
      console.log(this.platform.isPortrait());
  }

}

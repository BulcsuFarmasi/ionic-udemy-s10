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
  }

}

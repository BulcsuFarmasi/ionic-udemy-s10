import { Component, ViewChild } from '@angular/core';

import { Navbar } from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  @ViewChild(Navbar) navbar:Navbar;

  ionViewWillEnter () {
    this.navbar.setBackButtonText('Home');
    //this.navbar.hideBackButton = true;
  }
}

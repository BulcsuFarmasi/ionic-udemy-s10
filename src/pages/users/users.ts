import { Component, ViewChild } from '@angular/core';

import { Navbar, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  @ViewChild(Navbar) navbar:Navbar;

  constructor (private viewController:ViewController) {}

  ionViewWillEnter () {
    //this.navbar.setBackButtonText('Home');
    //this.navbar.hideBackButton = true;
    this.viewController.setBackButtonText('Home');
    //this.viewController.showBackButton(false);
  }
}

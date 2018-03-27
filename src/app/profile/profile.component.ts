import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  pinMapIcon = 'pin-map';

  constructor() { }

  ngOnInit() {
    this.user = new User();

    this.user.firstName = 'Courtney';
    this.user.lastName = 'Timmons';
    this.user.followers = 15323;
    this.user.image = '../../assets/images/avatar2.png';
  }

  modifyPinMapIcon(icon: string) {
    this.pinMapIcon = icon;
  }

}

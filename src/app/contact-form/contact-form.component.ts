import { Component, OnInit } from '@angular/core';
import { Mail } from '../entities/mail';
import { User } from '../entities/user';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  mail = new Mail();
  users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.get();
  }

  sendEmail() {
    if (this.mail.message && this.mail.subject && this.mail.contacts.length > 0) {
      console.log('Email sent');
    } else {
      console.error('Invalid form');
    }
  }
}

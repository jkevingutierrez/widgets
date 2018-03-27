import { Component, OnInit } from '@angular/core';
import { Form } from './form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form = new Form();

  constructor() { }

  ngOnInit() {
  }

}

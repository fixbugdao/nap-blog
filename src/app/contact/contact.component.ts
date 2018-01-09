import { ContactService } from './contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Header } from '../header/header';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  header: Header = { title: 'Contact Me', subTitle: 'Have questions? I have answer', backgroundUrl: '../assets/images/contact-bg.jpg' };
  form: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    const { name, email, message } = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    const formRequest = { name, email, message, date, html };
    this.contactService.createContact(formRequest);
    this.form.reset();
  }

}

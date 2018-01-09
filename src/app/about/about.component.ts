import { Header } from '../header/header';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  header: Header = {
    title: 'About',
    subTitle: 'Hi, I am Phuong Nguyen. I am a Full Stack Web Developer in Ho Chi Minh City, Vietnam.',
    backgroundUrl: '../assets/images/about-bg.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}

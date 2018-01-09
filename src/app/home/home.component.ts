import { Header } from '../header/header';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  header: Header = {
    title: 'Phuong Nguyen',
    subTitle: 'Software engineer in Ho Chi Minh City, Vietnam.',
    backgroundUrl: '../assets/images/home-bg.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thepremianstory',
  templateUrl: './thepremianstory.component.html',
  styleUrls: ['./thepremianstory.component.scss']
})
export class ThepremianstoryComponent implements OnInit {

  constructor() { }

  story = [
    {
      icon: '#icon_termDevelopment',
      description: `Comprehensive
      Development`,
    },
    {
      icon: '#icon_commTrainning',
      description: `Communication
      and vocational
      training`,
    },
    {
      icon: '#icon_art',
      description: `Performing
      arts`,
    }
  ];

  ngOnInit() {
  }

}

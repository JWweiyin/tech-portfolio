import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cardli',
  templateUrl: './cardli.component.html',
  styleUrls: ['./cardli.component.css']
})
export class CardliComponent implements OnInit {
faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('title')?.scrollIntoView(true);
  }

}

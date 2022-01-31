import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-bitstory',
  templateUrl: './bitstory.component.html',
  styleUrls: ['./bitstory.component.css']
})
export class BitstoryComponent implements OnInit {
faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('title')?.scrollIntoView(true);
  }

}

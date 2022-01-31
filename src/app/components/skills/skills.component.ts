import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('title')?.scrollIntoView(true);
  }

}

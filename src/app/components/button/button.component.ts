import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  constructor() { }
  faAngleUp = faAngleUp;
  ngOnInit(): void {
  }

  scrollUp(): void {
    document.getElementById('top')?.scrollIntoView();
    console.log("to top");
  }
}

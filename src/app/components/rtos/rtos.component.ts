import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rtos',
  templateUrl: './rtos.component.html',
  styleUrls: ['./rtos.component.css']
})
export class RTOSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('RTOS')?.scrollIntoView(true);
  }

}

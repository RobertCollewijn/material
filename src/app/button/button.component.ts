import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event:any) {
    console.log('click: ' + event.target.innerHTML + ', ' + event.target.toString());
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {
  isChecked = true;

  constructor() {
  }

  ngOnInit() {
  }

  changeSlide(event: any) {
    this.isChecked = !this.isChecked;
    console.log('Change slide: ' + this.isChecked +', ' + event.target)
  }
}

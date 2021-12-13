import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupform-container',
  templateUrl: './popupform-container.component.html',
  styleUrls: ['./popupform-container.component.css']
})
export class PopupformContainerComponent implements OnInit {
  activeForm = 'customer'
  constructor() { }

  ngOnInit(): void {
  }

  changeActiveForm(formName: string) {
    this.activeForm = formName;
  }

}

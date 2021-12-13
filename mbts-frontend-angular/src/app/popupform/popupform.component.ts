import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent implements OnInit {
  @Input() activeForm: String = "";

  constructor() { }
  

  ngOnInit(): void {
  }

}

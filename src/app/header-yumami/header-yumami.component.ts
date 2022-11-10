import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-yumami',
  templateUrl: './header-yumami.component.html',
  styleUrls: ['./header-yumami.component.css']
})
export class HeaderYumamiComponent implements OnInit {

  title : string = 'yumami';

  constructor() { }

  ngOnInit(): void {
  }

}

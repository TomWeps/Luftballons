import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-v-list',
  templateUrl: './v-list.component.html',
  styleUrls: ['./v-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VListComponent implements OnInit {

  @Input()
  showChildList = false;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-h-list',
  templateUrl: './h-list.component.html',
  styleUrls: ['./h-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HListComponent implements OnInit {

  items: string[] = [ 'alfa', 'beta', 'gamma'];

  constructor() { }

  ngOnInit() {
  }

}

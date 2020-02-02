import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dd-list',
  templateUrl: './dd-list.component.html',
  styleUrls: ['./dd-list.component.scss']
})
export class DdListComponent implements OnInit {

  items: string[] = [ 'alfa', 'beta', 'gamma'];

  constructor() { }

  ngOnInit() {
  }

}

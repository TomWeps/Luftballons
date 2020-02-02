import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ul-list',
  templateUrl: './ul-list.component.html',
  styleUrls: ['./ul-list.component.scss']
})
export class UlListComponent implements OnInit {

  @Input()
  showChildList = false;

  constructor() { }

  ngOnInit() {
  }

}

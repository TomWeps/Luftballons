import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ballon',
  templateUrl: './ballon.component.html',
  styleUrls: ['./ballon.component.scss']
})
export class BallonComponent implements OnInit {

  @Input()
  styleClass: string;

  constructor() { }

  ngOnInit() {
  }

}

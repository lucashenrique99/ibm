import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() title: string;
  @Input() buttonLabel: string = "Novo";
  @Input() routerLinkButton: string = "";

  constructor() { }

  ngOnInit() {
  }

}

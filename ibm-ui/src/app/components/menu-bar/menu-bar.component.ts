import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {

  isCollapsed = true;
  menuLinks: Array<any>;
  constructor(
    private menuService: MenuService
  ) { 
  }

  ngOnInit() {
    this.menuService.menu.subscribe((menus) => this.menuLinks = menus);
  }

  handleOnClickCollapseButton(el: ElementRef){
    this.isCollapsed = !this.isCollapsed;
  }

}

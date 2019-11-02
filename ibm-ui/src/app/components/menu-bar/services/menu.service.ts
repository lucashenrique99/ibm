import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuLinks: Array<MenuItem>;
  private $menu = new BehaviorSubject<Array<MenuItem>>([]);

  constructor(
  ) {

    this.handleBuildMenu();

  }

  private handleBuildMenu() {
    this.menuLinks = [
      { label: 'Início', routerLink: '/', visible: true },
      { label: 'A Igreja', routerLink: '/a-igreja', visible: true },
      { label: 'Artigos', routerLink: '/', visible: true },
      { label: 'Videos Cristãos', routerLink: '/videos-cristaos', visible: true },
      { label: 'Lições semanais', routerLink: '/', visible: true },
      { label: 'Nossa Loja', routerLink: '/', visible: true },
      // { id: 'biblia', label: 'Bíblia', routerLink: '/biblia', visible: true, items: [] },
    ];
    this.$menu.next(this.menuLinks.filter(menu => menu.visible));
  }

  get menu() {
    return this.$menu;
  }
}

export interface MenuItem {
  id?: string;
  label: string;
  routerLink: string;
  visible: boolean;
  items?: MenuItem[];
}
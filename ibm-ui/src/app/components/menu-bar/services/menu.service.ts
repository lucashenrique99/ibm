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
      {
        label: 'Início',
        routerLink: '/',
        visible: true
      },
      {
        label: 'A Igreja',
        routerLink: '/a-igreja',
        visible: true
      },
      {
        label: 'Artigos',
        routerLink: '/artigos',
        visible: true
      },
      {
        label: 'Cultos Ao Vivo',
        routerLink: '/videos-cristaos',
        visible: true
      },
      {
        label: 'Downloads',
        routerLink: '/downloads',
        visible: true
      },
      {
        label: 'Atitude Store',
        routerLink: '/',
        visible: false
      },
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
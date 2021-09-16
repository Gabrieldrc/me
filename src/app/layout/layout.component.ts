import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  menu_style = "overlay"
  social_menu_style = "social-menu"
  constructor() { }

  ngOnInit(): void {
  }

  switchMenu(isOpen: boolean) {
    if (isOpen) {
      this.openMenu()
    } else {
      this.closeMenu()
    }
  }

  switchSocialMenu(isOpen: boolean) {
    if (isOpen) {
      this.openSocialMenu()
    } else {
      this.closeSocialMenu()
    }
  }

  private closeMenu() {
    this.menu_style = "overlay"
  }

  private openMenu() {
    this.menu_style = this.menu_style + " open"
  }
  private closeSocialMenu() {
    this.social_menu_style = "social-menu"
  }

  private openSocialMenu() {
    this.social_menu_style = this.social_menu_style + " show-social"
  }
}

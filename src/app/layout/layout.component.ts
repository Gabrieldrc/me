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
    console.log("close menu")
    this.menu_style = "overlay"
  }

  private openMenu() {
    console.log("open menu")
    this.menu_style = this.menu_style + " open"
  }
  private closeSocialMenu() {
    console.log("close social menu")
    this.social_menu_style = "social-menu"
  }

  private openSocialMenu() {
    console.log("open social menu")
    this.social_menu_style = this.social_menu_style + " show-social"
  }
}

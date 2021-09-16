import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  menu_style = "overlay"
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

  private closeMenu() {
    console.log("close menu")
    this.menu_style = "overlay"
  }

  private openMenu() {
    console.log("open menu")

    this.menu_style = this.menu_style + " open"
  }
}

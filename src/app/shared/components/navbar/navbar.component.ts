import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private isMenuOpened: boolean
  private isSocialMenuOpened: boolean
  @Output() switchMenuEvent = new EventEmitter<boolean>(false)
  @Output() switchSocialMenuEvent = new EventEmitter<boolean>(false)
  constructor() {
    this.isMenuOpened = false
    this.isSocialMenuOpened = false
  }

  ngOnInit(): void {
  }

  menuButtonClicked() {
    this.isMenuOpened = !this.isMenuOpened
    this.switchMenuEvent.emit(this.isMenuOpened)
  }
  socialMenuButtonClicked() {
    this.isSocialMenuOpened = !this.isSocialMenuOpened
    this.switchSocialMenuEvent.emit(this.isSocialMenuOpened)
  }
}

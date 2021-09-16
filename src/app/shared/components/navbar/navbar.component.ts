import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private isMenuOpened: boolean
  @Output() switchMenuEvent = new EventEmitter<boolean>(false)
  constructor() {
    this.isMenuOpened = false
  }

  ngOnInit(): void {
    this.isMenuOpened = false
  }

  menuButtonClicked() {
    this.isMenuOpened = !this.isMenuOpened
    this.switchMenuEvent.emit(this.isMenuOpened)
  }
}

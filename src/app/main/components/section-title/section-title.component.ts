import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.sass']
})
export class SectionTitleComponent implements OnInit {

  @Input() content: string
  constructor() {
    this.content = ''
  }

  ngOnInit(): void {
  }

}

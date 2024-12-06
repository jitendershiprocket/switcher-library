import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-switcher',
  templateUrl: './lib-switcher.component.html',
  styleUrls: ['./lib-switcher.component.css']
})
export class LibSwitcherComponent {
  @Input() data!: string;
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}

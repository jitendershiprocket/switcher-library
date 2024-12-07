import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule], // Use CommonModule for libraries
})
export class SwitcherModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(SwitcherComponent, { injector });
    customElements.define('switcher-element', element);
  }

  ngDoBootstrap() {
    // Custom elements do not require explicit bootstrapping
  }
}

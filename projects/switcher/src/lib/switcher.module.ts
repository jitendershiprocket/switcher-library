import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule],
  providers: [] // Ensure services are provided in the module
})
export class SwitcherModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(SwitcherComponent, { injector: this.injector });
    customElements.define('switcher-element', element);
  }

  ngDoBootstrap() {
    // Custom elements do not require explicit bootstrapping
  }
}

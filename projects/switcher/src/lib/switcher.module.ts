import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule],
  providers: [] // Ensure the service is provided in the module
})
export class SwitcherModule implements DoBootstrap {
  constructor(private injector: Injector) {
    // Register the custom element with Angular's createCustomElement method
    const element = createCustomElement(SwitcherComponent, { injector });
    customElements.define('switcher-element', element);
  }

  ngDoBootstrap() {
    // Custom elements do not need explicit bootstrapping
  }
}

import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule] // Import CommonModule to provide necessary directives for the component
})
export class SwitcherModule implements DoBootstrap {
  constructor(private injector: Injector) {
    // Register the custom element with Angular's createCustomElement method
    const element = createCustomElement(SwitcherComponent, { injector });
    customElements.define('switcher-element', element);
  }

  ngDoBootstrap() {
    // No explicit bootstrapping required for custom elements
  }
}

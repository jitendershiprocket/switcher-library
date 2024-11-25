import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule],
  exports: [SwitcherComponent] // Export the component for use in other modules
})
export class SwitcherModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(SwitcherComponent, { injector });
    customElements.define('switcher-element', customElement);
  }
}

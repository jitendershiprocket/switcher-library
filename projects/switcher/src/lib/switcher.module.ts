import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component'; // Make sure this is the correct component

@NgModule({
  declarations: [SwitcherComponent],
  imports: [],
  entryComponents: [SwitcherComponent], // Ensure SwitcherComponent is part of entry components
})
export class SwitcherModule {
  constructor(private injector: Injector) {
    // Create the custom element
    const el = createCustomElement(SwitcherComponent, { injector });
    // Register the custom element
    customElements.define('switcher-element', el);
  }

  ngDoBootstrap() {} // Empty since we are bootstrapping via custom element
}
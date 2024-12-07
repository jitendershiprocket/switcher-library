import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [BrowserModule],
  entryComponents: [SwitcherComponent] // Ensure component is marked as entry
})
export class SwitcherModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(SwitcherComponent, { injector });
    customElements.define('switcher-element', element);
  }

  ngDoBootstrap() {
    // No-op: Custom elements do not need a bootstrap component
  }
}

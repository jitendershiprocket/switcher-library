import { Injector, NgModule, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule],
  providers: []
})
export class SwitcherModule {
  constructor() {}

  // ngDoBootstrap() {
  //   // Create the injector with a context that supports DI
  //   const injector = Injector.create({ providers: [] });
  //   const element = createCustomElement(SwitcherComponent, { injector });
  //   customElements.define('switcher-element', element);
  // }
}

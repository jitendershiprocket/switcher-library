import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

class SwitcherComponent {
    constructor() {
        this.data = '';
        this.isModalOpen = false;
    }
    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
}
SwitcherComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SwitcherComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, ngImport: i0, template: `
    <button (click)="openModal()">Open Modal</button>
    <div *ngIf="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <p>{{ data }}</p>
      </div>
    </div>
  `, isInline: true, styles: ["\n    .modal {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      z-index: 1000;\n    }\n    .modal-content {\n      background: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n    .close {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      font-size: 20px;\n      cursor: pointer;\n    }\n  "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-switcher',
                    template: `
    <button (click)="openModal()">Open Modal</button>
    <div *ngIf="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <p>{{ data }}</p>
      </div>
    </div>
  `,
                    styles: [`
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      cursor: pointer;
    }
  `]
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class SwitcherModule {
    // Injector is injected into the class via the constructor
    constructor(injector) {
        this.injector = injector;
        // Properly pass the injector to createCustomElement
        const element = createCustomElement(SwitcherComponent, { injector: this.injector });
        customElements.define('switcher-element', element);
    }
    ngDoBootstrap() {
        // Custom elements do not require explicit bootstrapping
    }
}
SwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [CommonModule] });
SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, providers: [] // Ensure services are provided in the module
    , imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [CommonModule],
                    providers: [] // Ensure services are provided in the module
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

/*
 * Public API Surface of switcher
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SwitcherComponent, SwitcherModule };
//# sourceMappingURL=shiprocket-switcher-lib.js.map

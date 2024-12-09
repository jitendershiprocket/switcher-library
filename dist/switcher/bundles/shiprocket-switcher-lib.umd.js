(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/elements')) :
  typeof define === 'function' && define.amd ? define('shiprocket-switcher-lib', ['exports', '@angular/core', '@angular/common', '@angular/elements'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["shiprocket-switcher-lib"] = {}, global.ng.core, global.ng.common, global.ng.elements));
})(this, (function (exports, i0, i1, elements) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

  var SwitcherComponent = /** @class */ (function () {
      function SwitcherComponent() {
          this.data = '';
          this.isModalOpen = false;
      }
      SwitcherComponent.prototype.openModal = function () {
          this.isModalOpen = true;
      };
      SwitcherComponent.prototype.closeModal = function () {
          this.isModalOpen = false;
      };
      return SwitcherComponent;
  }());
  SwitcherComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  SwitcherComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SwitcherComponent, selector: "lib-switcher", inputs: { data: "data" }, ngImport: i0__namespace, template: "\n    <button (click)=\"openModal()\">Open Modal</button>\n    <div *ngIf=\"isModalOpen\" class=\"modal\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <p>{{ data }}</p>\n      </div>\n    </div>\n  ", isInline: true, styles: ["\n    .modal {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      z-index: 1000;\n    }\n    .modal-content {\n      background: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n    .close {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      font-size: 20px;\n      cursor: pointer;\n    }\n  "], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-switcher',
                      template: "\n    <button (click)=\"openModal()\">Open Modal</button>\n    <div *ngIf=\"isModalOpen\" class=\"modal\">\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n        <p>{{ data }}</p>\n      </div>\n    </div>\n  ",
                      styles: ["\n    .modal {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      z-index: 1000;\n    }\n    .modal-content {\n      background: white;\n      padding: 20px;\n      border-radius: 8px;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n    .close {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      font-size: 20px;\n      cursor: pointer;\n    }\n  "]
                  }]
          }], propDecorators: { data: [{
                  type: i0.Input
              }] } });

  var SwitcherModule = /** @class */ (function () {
      function SwitcherModule() {
      }
      SwitcherModule.prototype.ngDoBootstrap = function () {
          // Create the injector with a context that supports DI
          var injector = i0.Injector.create({ providers: [] });
          var element = elements.createCustomElement(SwitcherComponent, { injector: injector });
          customElements.define('switcher-element', element);
      };
      return SwitcherModule;
  }());
  SwitcherModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  SwitcherModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, declarations: [SwitcherComponent], imports: [i1.CommonModule] });
  SwitcherModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, providers: [], imports: [[i1.CommonModule]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SwitcherModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [SwitcherComponent],
                      imports: [i1.CommonModule],
                      providers: []
                  }]
          }], ctorParameters: function () { return []; } });

  /*
   * Public API Surface of switcher
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.SwitcherComponent = SwitcherComponent;
  exports.SwitcherModule = SwitcherModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=shiprocket-switcher-lib.umd.js.map

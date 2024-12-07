import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwitcherComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXlDakQsTUFBTSxPQUFPLGlCQUFpQjtJQXZDOUI7UUF3Q1csU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFHLEtBQUssQ0FBQztLQVNyQjtJQVBDLFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7OytHQVZVLGlCQUFpQjttR0FBakIsaUJBQWlCLDhFQXJDbEI7Ozs7Ozs7O0dBUVQ7NEZBNkJVLGlCQUFpQjtrQkF2QzdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQlIsQ0FBQztpQkFDSDs4QkFFVSxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib3Blbk1vZGFsKClcIj5PcGVuIE1vZGFsPC9idXR0b24+XG4gICAgPGRpdiAqbmdJZj1cImlzTW9kYWxPcGVuXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8cD57eyBkYXRhIH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAubW9kYWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgfVxuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIC5jbG9zZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nID0gJyc7XG4gIGlzTW9kYWxPcGVuID0gZmFsc2U7XG5cbiAgb3Blbk1vZGFsKCkge1xuICAgIHRoaXMuaXNNb2RhbE9wZW4gPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmlzTW9kYWxPcGVuID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
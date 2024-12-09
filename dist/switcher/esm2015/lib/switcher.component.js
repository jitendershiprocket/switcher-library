import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
  `, isInline: true, styles: ["\n    .modal { display: block; position: fixed; /* Add styles for your modal */ }\n    .modal-content { /* Add styles for content */ }\n    .close { cursor: pointer; }\n  "] });
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
    .modal { display: block; position: fixed; /* Add styles for your modal */ }
    .modal-content { /* Add styles for content */ }
    .close { cursor: pointer; }
  `]
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBbUJqRCxNQUFNLE9BQU8saUJBQWlCO0lBakI5QjtRQWtCVyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0tBU3JCO0lBUEMsU0FBUztRQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7K0dBVlUsaUJBQWlCO21HQUFqQixpQkFBaUIsOEVBZmxCOzs7Ozs7OztHQVFUOzRGQU9VLGlCQUFpQjtrQkFqQjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs7OztHQUlSLENBQUM7aUJBQ0g7OEJBRVUsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3dpdGNoZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCI+T3BlbiBNb2RhbDwvYnV0dG9uPlxuICAgIDxkaXYgKm5nSWY9XCJpc01vZGFsT3BlblwiIGNsYXNzPVwibW9kYWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPHA+e3sgZGF0YSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLm1vZGFsIHsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBmaXhlZDsgLyogQWRkIHN0eWxlcyBmb3IgeW91ciBtb2RhbCAqLyB9XG4gICAgLm1vZGFsLWNvbnRlbnQgeyAvKiBBZGQgc3R5bGVzIGZvciBjb250ZW50ICovIH1cbiAgICAuY2xvc2UgeyBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBzdHJpbmcgPSAnJztcbiAgaXNNb2RhbE9wZW4gPSBmYWxzZTtcblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5pc01vZGFsT3BlbiA9IHRydWU7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuaXNNb2RhbE9wZW4gPSBmYWxzZTtcbiAgfVxufSJdfQ==
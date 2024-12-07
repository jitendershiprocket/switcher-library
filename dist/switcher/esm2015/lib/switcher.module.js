import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';
import * as i0 from "@angular/core";
export class SwitcherModule {
    constructor(injector) {
        this.injector = injector;
        // Register the custom element with Angular's createCustomElement method
        const element = createCustomElement(SwitcherComponent, { injector });
        customElements.define('switcher-element', element);
    }
    ngDoBootstrap() {
        // No explicit bootstrapping required for custom elements
    }
}
SwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [CommonModule] });
SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, imports: [[CommonModule] // Import CommonModule to provide necessary directives for the component
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [CommonModule] // Import CommonModule to provide necessary directives for the component
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU16RCxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLHdFQUF3RTtRQUN4RSxNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsYUFBYTtRQUNYLHlEQUF5RDtJQUMzRCxDQUFDOzs0R0FUVSxjQUFjOzZHQUFkLGNBQWMsaUJBSFYsaUJBQWlCLGFBQ3RCLFlBQVk7NkdBRVgsY0FBYyxZQUZoQixDQUFDLFlBQVksQ0FBQyxDQUFDLHdFQUF3RTs7NEZBRXJGLGNBQWM7a0JBSjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLHdFQUF3RTtpQkFDakciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IsIERvQm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IFN3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2hlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTd2l0Y2hlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdIC8vIEltcG9ydCBDb21tb25Nb2R1bGUgdG8gcHJvdmlkZSBuZWNlc3NhcnkgZGlyZWN0aXZlcyBmb3IgdGhlIGNvbXBvbmVudFxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hlck1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAvLyBSZWdpc3RlciB0aGUgY3VzdG9tIGVsZW1lbnQgd2l0aCBBbmd1bGFyJ3MgY3JlYXRlQ3VzdG9tRWxlbWVudCBtZXRob2RcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChTd2l0Y2hlckNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N3aXRjaGVyLWVsZW1lbnQnLCBlbGVtZW50KTtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7XG4gICAgLy8gTm8gZXhwbGljaXQgYm9vdHN0cmFwcGluZyByZXF1aXJlZCBmb3IgY3VzdG9tIGVsZW1lbnRzXG4gIH1cbn1cbiJdfQ==
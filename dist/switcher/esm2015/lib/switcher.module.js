import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';
import * as i0 from "@angular/core";
export class SwitcherModule {
    constructor() { }
    ngDoBootstrap() {
        // Create the injector with a context that supports DI
        const injector = Injector.create({ providers: [] });
        const element = createCustomElement(SwitcherComponent, { injector });
        customElements.define('switcher-element', element);
    }
}
SwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [CommonModule] });
SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, providers: [], imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [CommonModule],
                    providers: []
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU96RCxNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZSxDQUFDO0lBRWhCLGFBQWE7UUFDWCxzREFBc0Q7UUFDdEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRSxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7OzRHQVJVLGNBQWM7NkdBQWQsY0FBYyxpQkFKVixpQkFBaUIsYUFDdEIsWUFBWTs2R0FHWCxjQUFjLGFBRmQsRUFBRSxZQURKLENBQUMsWUFBWSxDQUFDOzRGQUdaLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxFQUFFLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUsIERvQm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IFN3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2hlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTd2l0Y2hlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyTW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdEb0Jvb3RzdHJhcCgpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGluamVjdG9yIHdpdGggYSBjb250ZXh0IHRoYXQgc3VwcG9ydHMgRElcbiAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHByb3ZpZGVyczogW10gfSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoU3dpdGNoZXJDb21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzd2l0Y2hlci1lbGVtZW50JywgZWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==
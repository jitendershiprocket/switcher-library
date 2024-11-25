import { NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component'; // Make sure this is the correct component
import * as i0 from "@angular/core";
export class SwitcherModule {
    constructor(injector) {
        this.injector = injector;
        // Create the custom element
        const el = createCustomElement(SwitcherComponent, { injector });
        // Register the custom element
        customElements.define('switcher-element', el);
    }
    ngDoBootstrap() { } // Empty since we are bootstrapping via custom element
}
SwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent] });
SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [],
                    entryComponents: [SwitcherComponent], // Ensure SwitcherComponent is part of entry components
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQyxDQUFDLDBDQUEwQzs7QUFPcEcsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyw0QkFBNEI7UUFDNUIsTUFBTSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLDhCQUE4QjtRQUM5QixjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxhQUFhLEtBQUksQ0FBQyxDQUFDLHNEQUFzRDs7NEdBUjlELGNBQWM7NkdBQWQsY0FBYyxpQkFKVixpQkFBaUI7NkdBSXJCLGNBQWMsWUFIaEIsRUFBRTs0RkFHQSxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsRUFBRTtvQkFDWCxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLHVEQUF1RDtpQkFDOUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoZXIuY29tcG9uZW50JzsgLy8gTWFrZSBzdXJlIHRoaXMgaXMgdGhlIGNvcnJlY3QgY29tcG9uZW50XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N3aXRjaGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW10sXG4gIGVudHJ5Q29tcG9uZW50czogW1N3aXRjaGVyQ29tcG9uZW50XSwgLy8gRW5zdXJlIFN3aXRjaGVyQ29tcG9uZW50IGlzIHBhcnQgb2YgZW50cnkgY29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hlck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBjdXN0b20gZWxlbWVudFxuICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChTd2l0Y2hlckNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICAvLyBSZWdpc3RlciB0aGUgY3VzdG9tIGVsZW1lbnRcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N3aXRjaGVyLWVsZW1lbnQnLCBlbCk7XG4gIH1cblxuICBuZ0RvQm9vdHN0cmFwKCkge30gLy8gRW1wdHkgc2luY2Ugd2UgYXJlIGJvb3RzdHJhcHBpbmcgdmlhIGN1c3RvbSBlbGVtZW50XG59XG4iXX0=
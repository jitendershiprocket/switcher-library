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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: []
                }]
        }], ctorParameters: () => [{ type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQyxDQUFDLDBDQUEwQzs7QUFNcEcsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyw0QkFBNEI7UUFDNUIsTUFBTSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLDhCQUE4QjtRQUM5QixjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxhQUFhLEtBQUksQ0FBQyxDQUFDLHNEQUFzRDsrR0FSOUQsY0FBYztnSEFBZCxjQUFjLGlCQUhSLGlCQUFpQjtnSEFHdkIsY0FBYzs7NEZBQWQsY0FBYztrQkFKMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoZXIuY29tcG9uZW50JzsgLy8gTWFrZSBzdXJlIHRoaXMgaXMgdGhlIGNvcnJlY3QgY29tcG9uZW50XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbU3dpdGNoZXJDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGN1c3RvbSBlbGVtZW50XG4gICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KFN3aXRjaGVyQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIC8vIFJlZ2lzdGVyIHRoZSBjdXN0b20gZWxlbWVudFxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3dpdGNoZXItZWxlbWVudCcsIGVsKTtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7fSAvLyBFbXB0eSBzaW5jZSB3ZSBhcmUgYm9vdHN0cmFwcGluZyB2aWEgY3VzdG9tIGVsZW1lbnRcbn1cbiJdfQ==
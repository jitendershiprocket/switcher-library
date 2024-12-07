import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component'; // Make sure this is the correct component
import { BrowserModule } from '@angular/platform-browser';
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
SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [BrowserModule] });
SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, imports: [[BrowserModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [BrowserModule],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    entryComponents: [SwitcherComponent], // Ensure SwitcherComponent is part of entry components
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQyxDQUFDLDBDQUEwQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBUTFELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsNEJBQTRCO1FBQzVCLE1BQU0sRUFBRSxHQUFHLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRSw4QkFBOEI7UUFDOUIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsYUFBYSxLQUFJLENBQUMsQ0FBQyxzREFBc0Q7OzRHQVI5RCxjQUFjOzZHQUFkLGNBQWMsaUJBTFYsaUJBQWlCLGFBQ3RCLGFBQWE7NkdBSVosY0FBYyxZQUpoQixDQUFDLGFBQWEsQ0FBQzs0RkFJYixjQUFjO2tCQU4xQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLHVEQUF1RDtpQkFDOUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoZXIuY29tcG9uZW50JzsgLy8gTWFrZSBzdXJlIHRoaXMgaXMgdGhlIGNvcnJlY3QgY29tcG9uZW50XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N3aXRjaGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGVdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sIC8vIEFkZCB0aGlzIGxpbmVcbiAgZW50cnlDb21wb25lbnRzOiBbU3dpdGNoZXJDb21wb25lbnRdLCAvLyBFbnN1cmUgU3dpdGNoZXJDb21wb25lbnQgaXMgcGFydCBvZiBlbnRyeSBjb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGN1c3RvbSBlbGVtZW50XG4gICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KFN3aXRjaGVyQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIC8vIFJlZ2lzdGVyIHRoZSBjdXN0b20gZWxlbWVudFxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3dpdGNoZXItZWxlbWVudCcsIGVsKTtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7fSAvLyBFbXB0eSBzaW5jZSB3ZSBhcmUgYm9vdHN0cmFwcGluZyB2aWEgY3VzdG9tIGVsZW1lbnRcbn1cbiJdfQ==
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';
import * as i0 from "@angular/core";
export class SwitcherModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU96RCxNQUFNLE9BQU8sY0FBYztJQUN6QiwwREFBMEQ7SUFDMUQsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyxvREFBb0Q7UUFDcEQsTUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEYsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsYUFBYTtRQUNYLHdEQUF3RDtJQUMxRCxDQUFDOzs0R0FWVSxjQUFjOzZHQUFkLGNBQWMsaUJBSlYsaUJBQWlCLGFBQ3RCLFlBQVk7NkdBR1gsY0FBYyxhQUZkLEVBQUUsQ0FBQyw2Q0FBNkM7Z0JBRGxELENBQUMsWUFBWSxDQUFDOzRGQUdaLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxFQUFFLEVBQUUsQ0FBQyw2Q0FBNkM7aUJBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yLCBEb0Jvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3dpdGNoZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXSAvLyBFbnN1cmUgc2VydmljZXMgYXJlIHByb3ZpZGVkIGluIHRoZSBtb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoZXJNb2R1bGUgaW1wbGVtZW50cyBEb0Jvb3RzdHJhcCB7XG4gIC8vIEluamVjdG9yIGlzIGluamVjdGVkIGludG8gdGhlIGNsYXNzIHZpYSB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAvLyBQcm9wZXJseSBwYXNzIHRoZSBpbmplY3RvciB0byBjcmVhdGVDdXN0b21FbGVtZW50XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoU3dpdGNoZXJDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzd2l0Y2hlci1lbGVtZW50JywgZWxlbWVudCk7XG4gIH1cblxuICBuZ0RvQm9vdHN0cmFwKCkge1xuICAgIC8vIEN1c3RvbSBlbGVtZW50cyBkbyBub3QgcmVxdWlyZSBleHBsaWNpdCBib290c3RyYXBwaW5nXG4gIH1cbn1cbiJdfQ==
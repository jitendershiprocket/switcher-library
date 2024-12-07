import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { SwitcherComponent } from './switcher.component';
import * as i0 from "@angular/core";
export class SwitcherModule {
    constructor(injector) {
        this.injector = injector;
        const element = createCustomElement(SwitcherComponent, { injector });
        customElements.define('switcher-element', element);
    }
    ngDoBootstrap() {
        // No-op: Custom elements do not need a bootstrap component
    }
}
SwitcherModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
SwitcherModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, declarations: [SwitcherComponent], imports: [BrowserModule] });
SwitcherModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, imports: [[BrowserModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SwitcherModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitcherComponent],
                    imports: [BrowserModule],
                    entryComponents: [SwitcherComponent] // Ensure component is marked as entry
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpdGNoZXIvc3JjL2xpYi9zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU96RCxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRSxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxhQUFhO1FBQ1gsMkRBQTJEO0lBQzdELENBQUM7OzRHQVJVLGNBQWM7NkdBQWQsY0FBYyxpQkFKVixpQkFBaUIsYUFDdEIsYUFBYTs2R0FHWixjQUFjLFlBSGhCLENBQUMsYUFBYSxDQUFDOzRGQUdiLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDeEIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxzQ0FBc0M7aUJBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yLCBEb0Jvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IFN3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2hlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTd2l0Y2hlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbU3dpdGNoZXJDb21wb25lbnRdIC8vIEVuc3VyZSBjb21wb25lbnQgaXMgbWFya2VkIGFzIGVudHJ5XG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVyTW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KFN3aXRjaGVyQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3dpdGNoZXItZWxlbWVudCcsIGVsZW1lbnQpO1xuICB9XG5cbiAgbmdEb0Jvb3RzdHJhcCgpIHtcbiAgICAvLyBOby1vcDogQ3VzdG9tIGVsZW1lbnRzIGRvIG5vdCBuZWVkIGEgYm9vdHN0cmFwIGNvbXBvbmVudFxuICB9XG59XG4iXX0=
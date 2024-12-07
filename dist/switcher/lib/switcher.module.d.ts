import { Injector, DoBootstrap } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./switcher.component";
import * as i2 from "@angular/common";
export declare class SwitcherModule implements DoBootstrap {
    private injector;
    constructor(injector: Injector);
    ngDoBootstrap(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitcherModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SwitcherModule, [typeof i1.SwitcherComponent], [typeof i2.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SwitcherModule>;
}

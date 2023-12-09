/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from "@angular/core";

import { ProxyCmp } from "./angular-component-lib/utils";

import { Components } from "nucleus";

@ProxyCmp({
  inputs: ["buttontype", "disabled", "rounded", "size"],
})
@Component({
  selector: "nucleus-button",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ["buttontype", "disabled", "rounded", "size"],
})
export class NucleusButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface NucleusButton extends Components.NucleusButton {}

/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'nucleus';


@ProxyCmp({
  inputs: ['disabled', 'rounded', 'size', 'type']
})
@Component({
  selector: 'nucleus-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'rounded', 'size', 'type'],
})
export class NucleusButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface NucleusButton extends Components.NucleusButton {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'size', 'type']
})
@Component({
  selector: 'nucleus-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'size', 'type'],
})
export class NucleusToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['switchToggle']);
  }
}


export declare interface NucleusToggle extends Components.NucleusToggle {

  switchToggle: EventEmitter<CustomEvent<boolean>>;
}



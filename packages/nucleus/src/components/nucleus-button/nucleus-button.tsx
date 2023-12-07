import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'nucleus-button',
  styleUrl: 'nucleus-button.css',
  shadow: true
})
export class NucleusButton {
  @Prop() buttontype: 'primary' | 'secondary' = 'primary';

  @Prop() rounded: true | false = false;

  @Prop() disabled: true | false = false;

  render() {
    return (
      <button
        type='button'
        class={
          classNames('btn', {
            'btn-primary': this.buttontype === 'primary',
            'btn-secondary': this.buttontype === 'secondary',
            'rounded-full': this.rounded,
            'disabled': this.disabled
          })
        } >
        <slot />
      </button >
    );
  }
}
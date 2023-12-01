import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'nucleus-button',
  styleUrl: 'nucleus-button.css',
  shadow: true
})
export class NucleusButton {
  /**
   * Four button choices are: primary, callToAction, outline, and text
   */
  @Prop() buttontype: 'primary' | 'callToAction' | 'outline' | 'text' = "primary";

  render() {
    return (
      <button class={this.buttontype}>
        <slot />
      </button>
    );
  }
}
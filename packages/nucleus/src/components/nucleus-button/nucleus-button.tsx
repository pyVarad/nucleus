import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'nucleus-button',
  styleUrl: 'nucleus-button.css',
  shadow: true
})
export class NucleusButton {
  @Prop() buttontype: 'default' | 'dark' | 'light' = 'default';

  render() {

    const nucleusButton: string = classNames(
      {
        'text-white': this.buttontype !== 'light',
        'bg-blue-700': true,
        'hover:bg-blue-800': true,
        'focus:ring-4': true,
        'focus:ring-blue-300': true,
        'font-medium': true,
        'rounded-lg': true,
        'text-sm': true,
        'px-5': true,
        'py-2.5': true,
        'me-2': true,
        'mb-2': true,
        'dark:bg-blue-600': true,
        'dark:hover:bg-blue-700': true,
        'focus:outline-none': true,
        'dark:focus:ring-blue-800': true,
        'text-gray-900': this.buttontype === 'light',
        'bg-white': this.buttontype === 'light',
        'border': this.buttontype === 'light',
        'border-gray-200': this.buttontype === 'light',
        'hover:bg-gray-100': this.buttontype === 'light',
        'hover:text-blue-700': this.buttontype === 'light',
        'focus:z-10': this.buttontype === 'light',
        'focus:ring-gray-200': this.buttontype === 'light',
        'dark:focus:ring-gray-700': this.buttontype === 'light',
        'dark:bg-gray-800': this.buttontype === 'light',
        'dark:text-gray-400': this.buttontype === 'light',
        'dark:border-gray-600': this.buttontype === 'light',
        'dark:hover:text-white': this.buttontype === 'light',
        'dark:hover:bg-gray-700': this.buttontype === 'light',
        'bg-gray-800': this.buttontype === 'dark',
        'hover:bg-gray-900': this.buttontype === 'dark',
        'focus:ring-gray-300': this.buttontype === 'dark',
        'dark:border-gray-700': this.buttontype === 'dark'
      }
    );

    return (
      <button type="button" class={nucleusButton} >
        <slot />
      </button >
    );
  }
}
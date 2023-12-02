import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NucleusComponentLibraryModule } from 'nucleus-ng-component-library';

@Component({
  selector: 'storybook-button',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<nucleus-button buttontype="primary">Button</nucleus-button>`,
  imports: [NucleusComponentLibraryModule],
  styleUrls: ['./button.css']
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  buttonType: string = 'primary';

  @Input()
  label = 'Button';
}

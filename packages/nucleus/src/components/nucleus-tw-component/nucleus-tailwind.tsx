import { Component, h } from '@stencil/core'

import { StyledHost } from '../../utils/styledHost' // this may vary depending on where your ‘StyledHost’ component lives

@Component({
    tag: 'nucleus-tw-component',
    shadow: true,
})
export class StyledComponent {
    render() {
        return (
            <StyledHost>
                <div class="bg-indigo-500 p-6 rounded-md flex justify-center">
                    <h1 class="text-white font-sans">This is a Stencil component using Tailwind</h1>
                </div>
            </StyledHost>
        )
    }
}
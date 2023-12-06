import { Component, h } from '@stencil/core';

@Component({
    tag: 'nucleus-tw-component',
    styleUrl: 'nucleus-tailwind.css',
    shadow: true,
})
export class TailwindComponent {
    render() {
        return (
            <div class="bg-indigo-500 p-6 rounded-md flex justify-center">
                <h1 class="text-white font-sans">This is a Stencil component using Tailwind</h1>
            </div>
        );
    }
}
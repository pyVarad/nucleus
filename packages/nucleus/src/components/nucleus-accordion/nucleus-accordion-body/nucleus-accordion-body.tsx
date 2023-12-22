import { Component, Prop, h } from "@stencil/core";
import classNames from "classnames";

@Component({
    tag: "nucleus-accordion-body",
    styleUrl: "nucleus-accordion-body.css",
    shadow: false,
})
export class NucleusAccordionBody {
    render() {
        return (
            <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{" "}
                        <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                            get started
                        </a>{" "}
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </div>
            </div>
        )
    }
}

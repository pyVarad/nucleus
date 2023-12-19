import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: "nucleus-toggle",
    styleUrl: "nucleus-toggle.css",
    shadow: false,
})
export class NucleusToggle {

    @Prop({ mutable: true, reflect: true }) checked = false;

    @Prop() type: 'primary' | 'secondary' = 'primary';

    @Prop() size: "xs" | "sm" | "md" | "lg" | "xl" = "md";

    @Event() switchToggle: EventEmitter<boolean>;

    triggerToggle = () => {
        this.checked = !this.checked
        this.switchToggle.emit(this.checked);
    }

    render() {
        return (
            <label class="relative inline-flex items-center cursor-pointer">
                <input
                    role="checkbox"
                    aria-checked={this.checked}
                    tabIndex={0}
                    checked={this.checked}
                    aria-label="nucleus-toggle"
                    onClick={() => this.triggerToggle()}
                    type="checkbox"
                    placeholder="false"
                    title="nucleus-button"
                    value=""
                    class="sr-only peer"></input>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        );
    }
}

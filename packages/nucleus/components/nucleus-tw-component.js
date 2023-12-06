import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { S as StyledHost } from './styledHost.js';

const StyledComponent = /*@__PURE__*/ proxyCustomElement(class StyledComponent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(StyledHost, null, h("div", { class: "bg-indigo-500 p-6 rounded-md flex justify-center" }, h("h1", { class: "text-white font-sans" }, "This is a Stencil component using Tailwind"))));
    }
}, [1, "nucleus-tw-component"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["nucleus-tw-component"];
    components.forEach(tagName => { switch (tagName) {
        case "nucleus-tw-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, StyledComponent);
            }
            break;
    } });
}

const NucleusTwComponent = StyledComponent;
const defineCustomElement = defineCustomElement$1;

export { NucleusTwComponent, defineCustomElement };

//# sourceMappingURL=nucleus-tw-component.js.map
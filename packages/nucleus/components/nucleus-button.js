import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const nucleusButtonCss = "button{border:none;cursor:pointer;border-style:solid;border-radius:0px;padding:0 15px 0 15px;min-width:64px;height:36px;outline:0;font-weight:500;font-family:'Roboto', sans-serif;font-size:13px;position:relative;overflow:hidden}.primary{background-color:#F7F7FB;border-color:#C7D4DD;border-width:1px;color:#57657A}.primary:hover{background-color:#DDDDE1}.primary:active{background-color:#C5C5C8;background-size:100%;transition:background 0s}.callToAction{background-color:#508BE4;border-color:#508BE4;border-width:1px;color:#FFFF}.callToAction:hover{background-color:#4476C2}.callToAction:active{background-color:#37619F;background-size:100%;transition:background 0s}.outline{background-color:#FFFFFF;border-color:#508BE4;border-width:1px;color:#508BE4}.outline:hover{background-color:#EDF3FC}.outline:active{background-color:#DCE8FA;background-size:100%;transition:background 0s}.text{background-color:#FFFFFF;border-width:0px;color:#508BE4}.text:hover{background-color:#EDF3FC}.text:active{background-color:#DCE8FA;background-size:100%;transition:background 0s}";

const NucleusButton$1 = /*@__PURE__*/ proxyCustomElement(class NucleusButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.buttontype = "primary";
    }
    render() {
        return (h("button", { class: this.buttontype }, h("slot", null)));
    }
    static get style() { return nucleusButtonCss; }
}, [1, "nucleus-button", {
        "buttontype": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["nucleus-button"];
    components.forEach(tagName => { switch (tagName) {
        case "nucleus-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NucleusButton$1);
            }
            break;
    } });
}

const NucleusButton = NucleusButton$1;
const defineCustomElement = defineCustomElement$1;

export { NucleusButton, defineCustomElement };

//# sourceMappingURL=nucleus-button.js.map
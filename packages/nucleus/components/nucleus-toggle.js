import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const nucleusToggleCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:'Comic Neue', sans-serif;font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.relative{position:relative}.inline-flex{display:inline-flex}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.rounded{border-radius:0.25rem}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.toggle{height:1.5rem;width:2.75rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.toggle::after{position:absolute;top:0.125rem;inset-inline-start:2px;height:1.25rem;width:1.25rem;border-radius:9999px;border-width:1px;--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-content:'';content:var(--tw-content)}.peer:checked~.toggle::after{--tw-translate-x:100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.peer:focus~.toggle{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}:is([dir=\"rtl\"] .peer:checked~.toggle)::after{content:var(--tw-content);--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (prefers-color-scheme: dark){.toggle{--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}}.peer:checked~.primary{--tw-bg-opacity:1;background-color:rgb(13 148 136 / var(--tw-bg-opacity))}.peer:focus~.primary{--tw-ring-opacity:1;--tw-ring-color:rgb(94 234 212 / var(--tw-ring-opacity))}@media (prefers-color-scheme: dark){.peer:focus~.primary{--tw-ring-opacity:1;--tw-ring-color:rgb(17 94 89 / var(--tw-ring-opacity))}}.peer:checked~.secondary{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.peer:focus~.secondary{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253 / var(--tw-ring-opacity))}@media (prefers-color-scheme: dark){.peer:focus~.secondary{--tw-ring-opacity:1;--tw-ring-color:rgb(30 64 175 / var(--tw-ring-opacity))}}.xs{height:1rem;width:1.75rem}.xs::after{top:2px;height:0.75rem;content:var(--tw-content);width:0.75rem}.sm{height:1.25rem;width:2rem}.sm::after{top:2px;height:1rem;content:var(--tw-content);width:0.875rem}.md{height:1.5rem;width:2.75rem}.md::after{top:2px;height:1.25rem;content:var(--tw-content);width:1.25rem}.lg{height:1.75rem;width:3.5rem}.lg::after{top:2px;inset-inline-start:4px;height:1.5rem;content:var(--tw-content);width:1.5rem}.xl{height:2rem;width:4rem}.xl::after{top:2px;inset-inline-start:4px;height:1.75rem;content:var(--tw-content);width:1.75rem}";

const NucleusToggle$1 = /*@__PURE__*/ proxyCustomElement(class NucleusToggle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.switchToggle = createEvent(this, "switchToggle", 7);
        this.triggerToggle = () => {
            this.checked = !this.checked;
            this.switchToggle.emit(this.checked);
        };
        this.checked = false;
        this.type = "primary";
        this.size = "md";
        this.disabled = false;
    }
    render() {
        return (h("label", { class: "relative inline-flex items-center cursor-pointer" }, h("input", { role: "checkbox", "aria-checked": this.checked, tabIndex: 0, checked: this.checked, disabled: this.disabled, "aria-label": "nucleus-toggle", onClick: () => this.triggerToggle(), type: "checkbox", placeholder: "false", title: "nucleus-toggle", value: "", class: "sr-only peer" }), h("div", { class: classnames("toggle", "peer", {
                [this.type]: true,
                [this.size]: true,
            }) })));
    }
    static get style() { return nucleusToggleCss; }
}, [0, "nucleus-toggle", {
        "checked": [1540],
        "type": [1],
        "size": [1],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["nucleus-toggle"];
    components.forEach(tagName => { switch (tagName) {
        case "nucleus-toggle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NucleusToggle$1);
            }
            break;
    } });
}

const NucleusToggle = NucleusToggle$1;
const defineCustomElement = defineCustomElement$1;

export { NucleusToggle, defineCustomElement };

//# sourceMappingURL=nucleus-toggle.js.map
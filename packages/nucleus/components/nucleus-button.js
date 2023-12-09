import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const nucleusButtonCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:'Comic Neue', sans-serif;font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.rounded{border-radius:0.25rem}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.btn{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;font-family:'Comic Neue', sans-serif}.btn-primary{border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.btn-primary:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.btn-primary:focus{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.btn-primary:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.btn-secondary{border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.btn-secondary:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.btn-secondary:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235 / var(--tw-ring-opacity))}.btn-xs{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.75rem;line-height:1rem;font-weight:500}.btn-sm{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:500}.btn-md{padding-left:1.25rem;padding-right:1.25rem;padding-top:0.625rem;padding-bottom:0.625rem;font-size:1rem;line-height:1.5rem;font-weight:500}.btn-lg{padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:1rem;line-height:1.5rem;font-weight:500}.btn-xl{padding-left:1.5rem;padding-right:1.5rem;padding-top:0.875rem;padding-bottom:0.875rem;font-size:1.125rem;line-height:1.75rem;font-weight:500}.rounded{border-radius:9999px}.disabled{cursor:not-allowed;opacity:0.5}";

const NucleusButton$1 = /*@__PURE__*/ proxyCustomElement(class NucleusButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.buttontype = 'primary';
        this.rounded = false;
        this.disabled = false;
        this.size = 'md';
    }
    render() {
        console.log(this.buttontype);
        console.log(this.size);
        console.log(this.rounded);
        console.log(this.disabled);
        return (h("button", { type: 'button', class: classnames('btn', {
                [`btn-${this.buttontype}`]: true,
                'rounded': this.rounded,
                'disabled': this.disabled,
                [`btn-${this.size}`]: true
            }) }, h("slot", null)));
    }
    static get style() { return nucleusButtonCss; }
}, [1, "nucleus-button", {
        "buttontype": [1],
        "rounded": [4],
        "disabled": [4],
        "size": [1]
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
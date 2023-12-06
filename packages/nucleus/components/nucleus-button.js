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

const nucleusButtonCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-feature-settings:normal;font-variation-settings:normal;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.z-10{z-index:10}.mb-2{margin-bottom:0.5rem}.me-2{margin-inline-end:0.5rem}.flex{display:flex}.justify-center{justify-content:center}.rounded-lg{border-radius:0.5rem}.rounded-md{border-radius:0.375rem}.border{border-width:1px}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.bg-blue-700{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.bg-blue-800{--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-6{padding:1.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.font-sans{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"}.text-sm{font-size:0.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring-4{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-blue-300{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253 / var(--tw-ring-opacity))}.ring-blue-800{--tw-ring-opacity:1;--tw-ring-color:rgb(30 64 175 / var(--tw-ring-opacity))}.ring-gray-200{--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235 / var(--tw-ring-opacity))}.ring-gray-300{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219 / var(--tw-ring-opacity))}.ring-gray-700{--tw-ring-opacity:1;--tw-ring-color:rgb(55 65 81 / var(--tw-ring-opacity))}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-gray-900:hover{--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity))}.focus\\:z-10:focus{z-index:10}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253 / var(--tw-ring-opacity))}.focus\\:ring-gray-200:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235 / var(--tw-ring-opacity))}.focus\\:ring-gray-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219 / var(--tw-ring-opacity))}@media (prefers-color-scheme: dark){.dark\\:border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.dark\\:bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.dark\\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}.dark\\:hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\\:focus\\:ring-blue-800:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(30 64 175 / var(--tw-ring-opacity))}.dark\\:focus\\:ring-gray-700:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(55 65 81 / var(--tw-ring-opacity))}}";

const NucleusButton$1 = /*@__PURE__*/ proxyCustomElement(class NucleusButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.buttontype = 'default';
    }
    render() {
        const nucleusButton = classnames({
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
        });
        return (h("button", { type: "button", class: nucleusButton }, h("slot", null)));
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
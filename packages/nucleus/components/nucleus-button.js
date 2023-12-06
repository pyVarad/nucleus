import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { S as StyledHost } from './styledHost.js';

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

const NucleusButton$1 = /*@__PURE__*/ proxyCustomElement(class NucleusButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.default = classnames({
            'text-white': true,
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
        this.buttontype = 'default';
    }
    render() {
        return (h(StyledHost, null, h("button", { type: "button", class: this.default }, h("slot", null))));
    }
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
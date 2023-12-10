/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NucleusButton {
        "buttontype": "primary" | "secondary";
        "disabled": true | false;
        "rounded": true | false;
        "size": "xs" | "sm" | "md" | "lg" | "xl";
    }
}
declare global {
    interface HTMLNucleusButtonElement extends Components.NucleusButton, HTMLStencilElement {
    }
    var HTMLNucleusButtonElement: {
        prototype: HTMLNucleusButtonElement;
        new (): HTMLNucleusButtonElement;
    };
    interface HTMLElementTagNameMap {
        "nucleus-button": HTMLNucleusButtonElement;
    }
}
declare namespace LocalJSX {
    interface NucleusButton {
        "buttontype"?: "primary" | "secondary";
        "disabled"?: true | false;
        "rounded"?: true | false;
        "size"?: "xs" | "sm" | "md" | "lg" | "xl";
    }
    interface IntrinsicElements {
        "nucleus-button": NucleusButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nucleus-button": LocalJSX.NucleusButton & JSXBase.HTMLAttributes<HTMLNucleusButtonElement>;
        }
    }
}

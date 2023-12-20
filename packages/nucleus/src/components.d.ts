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
    interface NucleusToggle {
        "checked": boolean;
        "disabled": boolean;
        "size": "xs" | "sm" | "md" | "lg" | "xl";
        "type": "primary" | "secondary";
    }
}
export interface NucleusToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNucleusToggleElement;
}
declare global {
    interface HTMLNucleusButtonElement extends Components.NucleusButton, HTMLStencilElement {
    }
    var HTMLNucleusButtonElement: {
        prototype: HTMLNucleusButtonElement;
        new (): HTMLNucleusButtonElement;
    };
    interface HTMLNucleusToggleElementEventMap {
        "switchToggle": boolean;
    }
    interface HTMLNucleusToggleElement extends Components.NucleusToggle, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNucleusToggleElementEventMap>(type: K, listener: (this: HTMLNucleusToggleElement, ev: NucleusToggleCustomEvent<HTMLNucleusToggleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNucleusToggleElementEventMap>(type: K, listener: (this: HTMLNucleusToggleElement, ev: NucleusToggleCustomEvent<HTMLNucleusToggleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNucleusToggleElement: {
        prototype: HTMLNucleusToggleElement;
        new (): HTMLNucleusToggleElement;
    };
    interface HTMLElementTagNameMap {
        "nucleus-button": HTMLNucleusButtonElement;
        "nucleus-toggle": HTMLNucleusToggleElement;
    }
}
declare namespace LocalJSX {
    interface NucleusButton {
        "buttontype"?: "primary" | "secondary";
        "disabled"?: true | false;
        "rounded"?: true | false;
        "size"?: "xs" | "sm" | "md" | "lg" | "xl";
    }
    interface NucleusToggle {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onSwitchToggle"?: (event: NucleusToggleCustomEvent<boolean>) => void;
        "size"?: "xs" | "sm" | "md" | "lg" | "xl";
        "type"?: "primary" | "secondary";
    }
    interface IntrinsicElements {
        "nucleus-button": NucleusButton;
        "nucleus-toggle": NucleusToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nucleus-button": LocalJSX.NucleusButton & JSXBase.HTMLAttributes<HTMLNucleusButtonElement>;
            "nucleus-toggle": LocalJSX.NucleusToggle & JSXBase.HTMLAttributes<HTMLNucleusToggleElement>;
        }
    }
}

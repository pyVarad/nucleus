import type { Components, JSX } from "../dist/types/components";

interface NucleusButton extends Components.NucleusButton, HTMLElement {}
export const NucleusButton: {
    prototype: NucleusButton;
    new (): NucleusButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

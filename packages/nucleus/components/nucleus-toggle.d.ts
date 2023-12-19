import type { Components, JSX } from "../dist/types/components";

interface NucleusToggle extends Components.NucleusToggle, HTMLElement {}
export const NucleusToggle: {
    prototype: NucleusToggle;
    new (): NucleusToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../dist/types/components";

interface NucleusAccordion extends Components.NucleusAccordion, HTMLElement {}
export const NucleusAccordion: {
    prototype: NucleusAccordion;
    new (): NucleusAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

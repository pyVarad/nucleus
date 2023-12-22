import type { Components, JSX } from "../dist/types/components";

interface NucleusAccordionHeader extends Components.NucleusAccordionHeader, HTMLElement {}
export const NucleusAccordionHeader: {
    prototype: NucleusAccordionHeader;
    new (): NucleusAccordionHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

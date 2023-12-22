import type { Components, JSX } from "../dist/types/components";

interface NucleusAccordionBody extends Components.NucleusAccordionBody, HTMLElement {}
export const NucleusAccordionBody: {
    prototype: NucleusAccordionBody;
    new (): NucleusAccordionBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

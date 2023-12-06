import type { Components, JSX } from "../dist/types/components";

interface NucleusTwComponent extends Components.NucleusTwComponent, HTMLElement {}
export const NucleusTwComponent: {
    prototype: NucleusTwComponent;
    new (): NucleusTwComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

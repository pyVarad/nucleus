import { Component, Prop, h } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "nucleus-button",
  styleUrl: "nucleus-button.css",
  shadow: true,
})
export class NucleusButton {
  @Prop() buttontype: "primary" | "secondary" = "primary";

  @Prop() rounded: true | false = false;

  @Prop() disabled: true | false = false;

  @Prop() size: "xs" | "sm" | "md" | "lg" | "xl" = "md";

  render() {
    return (
      <button
        type="button"
        class={classNames("btn", {
          [`btn-${this.buttontype}`]: true,
          rounded: this.rounded,
          disabled: this.disabled,
          [`btn-${this.size}`]: true,
        })}
      >
        <slot />
      </button>
    );
  }
}

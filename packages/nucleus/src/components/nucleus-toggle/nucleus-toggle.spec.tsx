import { newSpecPage } from "@stencil/core/testing";
import { NucleusToggle } from "./nucleus-toggle";

describe("Nucleus Toggle Component", () => {
  it("should render toggle component", async () => {
    const page = await newSpecPage({
      components: [NucleusToggle],
      html: "<nucleus-toggle checked />",
    });
    expect(page.root).toEqualHtml(`<nucleus-toggle checked>
            <label class="relative inline-flex items-center cursor-pointer">
            <input aria-checked="" 
                checked="" 
                aria-label="nucleus-toggle" 
                class="peer sr-only" 
                placeholder="false" 
                role="checkbox" 
                tabindex="0" 
                title="nucleus-toggle" 
                type="checkbox" 
                value="">
                <div
                  class="toggle peer primary md"
                />
            </label>
        </nucleus-button>`);
  });

  // it("should render toggle component", async () => {
  //   const page = await newSpecPage({
  //     components: [NucleusToggle],
  //     html: "<nucleus-toggle checked />",
  //   });

  //   let eventSpy = jest.fn();
  //   page.win.document.addEventListener("itemToggled", eventSpy);
  //   const toggleElement = page.win.document.querySelector('.toggle')[0] as HTMLElement;
  //   toggleElement.click();
  //   expect(eventSpy).toHaveBeenCalled();
  // });
});

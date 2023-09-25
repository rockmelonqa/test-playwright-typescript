import { Locator, Page, FrameLocator } from "@playwright/test";
import PageBase from "~/support/PageBase";
import PageTest from "~/support/PageTest";

export default class extends PageBase {
  constructor(pageTest: PageTest) {
    super(pageTest);
  }

  public attribute(): Locator {
    return this.page.locator("//*[@data-abd = 'def']");
  }
  public css(): Locator {
    return this.page.locator("div.css-selector");
  }
  public customTestId(): Locator {
    return this.page.getByTestId("locate-me-by-custom-testid");
  }
  public id(): Locator {
    return this.page.locator("#div-locate-me-by-id");
  }
  public iframe(): FrameLocator {
    return this.page.frameLocator(".locate-me-by-class");
  }

  public iframeId(): FrameLocator {
    return this.page.frameLocator("#iframe-locate-me-by-id");
  }

  public iframeName(): FrameLocator {
    return this.page.frameLocator('[name="iframe-locate-me-by-name"]');
  }
  public label(): Locator {
    return this.page.getByLabel("Hello");
  }
  public name(): Locator {
    return this.page.locator("locate-me-by-name");
  }
  public placeholder(): Locator {
    return this.page.getByPlaceholder("locate-me-by-placeholder");
  }
  public testId(): Locator {
    return this.page.getByTestId("locate-me-by-testid");
  }
  public text(): Locator {
    return this.page.getByText(`Please "Locate me!"`);
  }
  public title(): Locator {
    return this.page.getByTitle(`locate-me-by-title`);
  }
  public xpath(): Locator {
    return this.page.locator(`//table/tbody/tr/td[1]/div[11]/p/span`);
  }

  public clear(): Locator {
    return this.page.locator(`.action-clear`);
  }
  public clickInput(): Locator {
    return this.page.locator(`.action-click-input`);
  }
  public clickButton(): Locator {
    return this.page.locator(`.action-click-button`);
  }

  public clickPopup(): Locator {
    return this.page.locator(`.link-click-popup`);
  }

  public input(): Locator {
    return this.page.locator(`.action-input`);
  }
  public selectOption(): Locator {
    return this.page.locator(`select`);
  }

  public verifyAttribute(): Locator {
    return this.page.locator(`.verify-attribute`);
  }

  public verifyHasText(): Locator {
    return this.page.locator(`.verify-has-text`);
  }

  public verifyHasValue(): Locator {
    return this.page.locator(`.verify-has-value`);
  }
  public verifyIsHidden(): Locator {
    return this.page.locator(`.verify-hidden`);
  }

  public verifyEditable(): Locator {
    return this.page.locator(`.verify-editable`);
  }

  public verifyReadOnly(): Locator {
    return this.page.locator(`.verify-readonly`);
  }
  public verifyVisible(): Locator {
    return this.page.locator(`.verify-visible`);
  }
  public routineInput1(): Locator {
    return this.page.locator(`.routine-input-1`);
  }
  public clickPopup2(): Locator {
    return this.page.locator(`.link-click-popup2`);
  }
}

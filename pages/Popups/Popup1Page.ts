import { Locator, Page } from "@playwright/test";
import PageBase from "~/support/PageBase";
import PageTest from "~/support/PageTest";

export default class extends PageBase {
  constructor(pageTest: PageTest) {
    super(pageTest);
  }

  public button(): Locator {
    return this.page.locator("button");
  }
  public input(): Locator {
    return this.page.locator("input");
  }
}

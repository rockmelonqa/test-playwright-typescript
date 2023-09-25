import { Page, expect } from "@playwright/test";
import PageDefinitions from "~/PageDefinitions";
import PageTest from "~/support/PageTest";
import TestRoutineBase from "~/support/TestRoutineBase";

export class StoveTestRoutineDs1 extends TestRoutineBase {
  constructor(pageTest: PageTest) {
    super(pageTest);
  }

  public async run() {
    await this.defs.KitchenSinkPage.routineInput1().fill("Hello world!");
    await expect(this.defs.KitchenSinkPage.routineInput1()).toHaveValue("Hello world!");

    // Open popup
    await this.clickOpenPopup(async () => await this.defs.KitchenSinkPage.clickPopup2().click());

    // Change context to the popup
    this.pageTest.switchTab(1);
    await expect(this.defs.page).toHaveTitle("Popup 2");
  }
}

import { Page, expect } from "@playwright/test";
import { TestCaseBase } from "~/support/TestCaseBase";
import { StoveTestRoutineDs1 } from "~/test-routines/StoveTestRoutine";
import { PanTestRoutineDs1 } from "~/test-routines/PanTestRoutine";

/** Kitchen sink test */
export default class extends TestCaseBase {
  constructor(page: Page) {
    super(page);
    this.pageTest = this;
  }

  public async run() {
    await this.pageTest.page.goto("http://localhost:3000/kitchen-sink.html");
    await expect(this.defs.KitchenSinkPage.attribute()).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.css()).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.id()).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.iframe().locator("h1")).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.iframeId().locator("h1")).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.iframeName().locator("h1")).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.label()).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.placeholder()).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.testId()).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.text()).toHaveCount(1);
    await expect(this.defs.KitchenSinkPage.xpath()).toHaveCount(1);

    await expect(this.defs.KitchenSinkPage.clear()).toHaveValue("Hello World");
    await this.defs.KitchenSinkPage.clear().fill("");
    await expect(this.defs.KitchenSinkPage.clear()).toHaveValue("");

    await expect(this.defs.KitchenSinkPage.clickInput()).toHaveValue("Hello");
    await this.defs.KitchenSinkPage.clickButton().click();
    await expect(this.defs.KitchenSinkPage.clickInput()).toHaveValue("World");

    // Open popup
    await this.pageTest.clickOpenPopup(async () => await this.defs.KitchenSinkPage.clickPopup().click());

    // // Change context to the popup
    await this.pageTest.switchTab("Popup");
    let title = await this.defs.page.title();
    await expect(this.defs.page).toHaveTitle("Popup 1");

    // // Close popup
    await this.pageTest.page.close();
    // // Switch context back to main page
    await this.pageTest.switchTab("Kitchen");
    title = await this.defs.page.title();
    await expect(this.defs.page).toHaveTitle("Kitchen Sink");

    await expect(this.defs.KitchenSinkPage.input()).toHaveValue("");
    await this.defs.KitchenSinkPage.input().fill("Hello World");
    await expect(this.defs.KitchenSinkPage.input()).toHaveValue("Hello World");

    await expect(this.defs.KitchenSinkPage.selectOption()).toHaveValue("");
    await this.defs.KitchenSinkPage.selectOption().selectOption("hello");
    await expect(this.defs.KitchenSinkPage.selectOption()).toHaveValue("hello");

    await expect(this.defs.KitchenSinkPage.verifyAttribute()).toHaveAttribute("my-o-attr", "my-value");
    await expect(this.defs.KitchenSinkPage.verifyHasText()).toHaveText("Hello World");
    await expect(this.defs.KitchenSinkPage.verifyHasValue()).toHaveValue("Hello World");
    await expect(this.defs.KitchenSinkPage.verifyIsHidden()).toBeHidden();

    await expect(this.defs.KitchenSinkPage.verifyEditable()).toBeEditable();
    await expect(this.defs.KitchenSinkPage.verifyReadOnly()).toBeEditable({ editable: false });
    await expect(this.defs.KitchenSinkPage.verifyVisible()).toBeVisible();
    await expect(this.defs.page).toHaveTitle("Kitchen Sink");
    await expect(this.defs.page).toHaveTitle(new RegExp("Kitchen"));
    await expect(this.defs.page).toHaveURL("http://localhost:3000/kitchen-sink.html");
    await expect(this.defs.page).toHaveURL(new RegExp("kitchen-sink"));

    await new StoveTestRoutineDs1(this).run();

    title = await this.defs.page.title();
    await expect(this.defs.page).toHaveTitle("Popup 2");

    await this.defs.Popup2Page.button().click();

    await new PanTestRoutineDs1(this).run();

    await this.page.close();
    // Switch context back to main page
    await this.switchTab(0);

    title = await this.defs.page.title();
    await expect(this.defs.page).toHaveTitle("Kitchen Sink");

    await this.delay(2000);
  }
}

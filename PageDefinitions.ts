import KitchenSinkPage from "~/pages/KitchenSinkPage";
import Popup1Page from "~/pages/Popups/Popup1Page";
import Popup2Page from "~/pages/Popups/Popup2Page";
import PageTest from "./support/PageTest";

/** Page definitions */
export default class {
  public readonly pageTest: PageTest;

  /** Gets the current Playwright Page instance */
  public get page() {
    return this.pageTest.page;
  }

  public readonly KitchenSinkPage: KitchenSinkPage;
  public readonly Popup1Page: Popup1Page;
  public readonly Popup2Page: Popup2Page;

  constructor(pageTest: PageTest) {
    this.pageTest = pageTest;
    this.KitchenSinkPage = new KitchenSinkPage(pageTest);
    this.Popup1Page = new Popup1Page(pageTest);
    this.Popup2Page = new Popup2Page(pageTest);
  }
}

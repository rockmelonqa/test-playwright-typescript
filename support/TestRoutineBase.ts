import PageTest from "./PageTest";
import PageDefinitions from "~/PageDefinitions";

/** Base class of TestRoutine */
export default class extends PageTest {
  protected defs: PageDefinitions;
  protected pageTest: PageTest;

  constructor(pageTest: PageTest) {
    super(pageTest.page);
    this.pageTest = pageTest;
    this.defs = new PageDefinitions(pageTest);
  }
}

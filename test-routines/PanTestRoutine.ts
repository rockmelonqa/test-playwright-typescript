import { expect } from "@playwright/test";
import PageTest from "~/support/PageTest";
import TestRoutineBase from "~/support/TestRoutineBase";

export class PanTestRoutineDs1 extends TestRoutineBase {
  constructor(pageTest: PageTest) {
    super(pageTest);
  }

  public async run() {
    await expect(this.defs.Popup2Page.input()).toHaveValue("World");
  }
}

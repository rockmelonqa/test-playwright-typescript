import { test } from "@playwright/test";
import KitchenSinkTestCase from "~/test-cases/KitchenSinkTestCase";

test("KitchenSinkTest", async ({ page }) => {
  await new KitchenSinkTestCase(page).run();
});

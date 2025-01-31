import { render } from "vitest-browser-react";
import { Root } from "./index";
import { getTestContext } from "../../test-utils";
import { expect, test } from "vitest";
import { userEvent } from "@vitest/browser/context";

test("Testing Root", async () => {
  const context = getTestContext();
  const { getByText } = render(<Root />, { wrapper: context.wrapper });

  await expect.element(getByText("Register")).toBeInTheDocument();

  await userEvent.click(getByText("Register"));
  expect(context.navigatorContext.registerPage).toBeCalled();

  await userEvent.click(getByText("Login"));
  expect(context.navigatorContext.loginPage).toBeCalled();
});

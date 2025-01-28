import { expect, Mock, test } from "vitest";
import { render } from "vitest-browser-react";
import { Register } from "./index";
import { userEvent } from "@vitest/browser/context";
import { getTestContext } from "../../test-utils";

test("renders Register", async () => {
  const context = getTestContext();

  const { getByText, getByPlaceholder, getByRole } = render(<Register />, {
    wrapper: context.wrapper,
  });

  await expect.element(getByText("Register New User")).toBeInTheDocument();

  await userEvent.fill(getByPlaceholder("name"), "test");
  await userEvent.fill(getByPlaceholder("email"), "test@email.com");
  await userEvent.fill(getByPlaceholder("password").first(), "123456");
  await userEvent.fill(getByPlaceholder("confirm password").last(), "123456");

  const submitBtn = getByRole("button");
  await userEvent.click(submitBtn);

  expect(context.dataContext.registerUser).toHaveBeenCalledWith({
    name: "test",
    email: "test@email.com",
    password: "123456",
    passwordConfirm: "123456",
  });

  (context.dataContext.registerUser as Mock).mockImplementationOnce(() => {
    throw new Error("something wrong");
  });

  await userEvent.click(submitBtn);
  await expect
    .element(getByText("Error while registering new user"))
    .toBeInTheDocument();

  (context.dataContext.registerUser as Mock).mockImplementationOnce(() => {
    return Promise.resolve({
      name: "test",
    });
  });

  await userEvent.click(submitBtn);
  expect(context.navigatorContext.homePage).toHaveBeenCalled();
});

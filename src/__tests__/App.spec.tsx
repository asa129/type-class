import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "@jest/globals";

import App from "../App";

describe("App", () => {
  test("タイトルがあること", () => {
    render(<App />);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});

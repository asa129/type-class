import { render, screen, waitFor } from "@testing-library/react";
import { expect, describe, test } from "@jest/globals";

import App from "../App";

describe("App", () => {
  test("タイトルがあること", async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId("title"));
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});

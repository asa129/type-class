import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "@jest/globals";

import App from "../App";
import { Todo } from "../domain/todo";

const mockGetAllTodos = jest
  .fn()
  .mockResolvedValue([
    new Todo(1, "title1", true, "20250330"),
    new Todo(2, "title2", true, "20250330"),
    new Todo(3, "title3", true, "20250330"),
    new Todo(4, "title4", true, "20250330"),
  ]);

jest.mock("../lib/todo.ts", () => ({
  selectData: () => mockGetAllTodos(),
}));

describe("App", () => {
  test("タイトルがあること", async () => {
    render(<App />);
    // await waitFor(() => screen.getByTestId("title"));
    const title = await screen.findByTestId("title");
    // const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });

  test("データが4つあること", async () => {
    render(<App />);
    const todos = await screen.findAllByRole("row");
    expect(todos.length - 1).toBe(4);
  });
});

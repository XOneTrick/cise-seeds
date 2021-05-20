import { render, screen } from "@testing-library/react";
import { Table, makeTable } from "./Table";
import ReactDOM from "react-dom";

test("renders learn react link", () => {
  render(<Table />);
  const linkElement = screen.getByText(/table heading/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Table />, div);
});

test("string matches", () =>
{
  expect("a").toBe("a");
});

test("make table", () =>
{
    expect(makeTable()).toBe("b");
})
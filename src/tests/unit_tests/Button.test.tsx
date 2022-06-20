import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

test("renders button", () => {
  render(<Button />);
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});
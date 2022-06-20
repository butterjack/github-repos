import { render, screen } from "@testing-library/react";
import Repository from "../../components/Repository";

test("renders card and modal on click", async () => {
  const repo = {
    updatedAt: new Date(),
    name: "name",
    owner: {
      login: "login",
    },
  };
  render(<Repository repo={repo} />);
  const repository = screen.getByTestId("repository");
  expect(repository).toBeInTheDocument();
});
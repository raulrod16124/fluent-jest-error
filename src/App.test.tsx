import { render } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

describe("Testing error of fluentui", () => {
  test("should...", () => {
    console.log("hello");
  });
});

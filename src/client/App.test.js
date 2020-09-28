import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  test("renders Express Starter Pack", () => {
    render(<App />);
    expect(screen.getByText(/express starter pack/i)).toBeInTheDocument();
  });

  // Below is what our old test example looked like.
  // Updated test following advice from...
  // https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

  // test("renders Express Starter Pack", () => {
  //   const { getByText } = render(<App />);
  //   expect(getByText(/express starter pack/i)).toBeInTheDocument();
  // });
});

import renderer from "react-test-renderer";
import { getNodeText } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";

import Spinner from "./Spinner";

// Snapshots to avoid portentially flakey and cumbersome tests around attribute calculations (strokeDashArray, strokeDashoffset etc.)
test("renders correctly", async () => {
  expect(
    renderer
      .create(<Spinner percentage={33} radius={200} thickness={12} />)
      .toJSON()
  ).toMatchSnapshot();

  expect(
    renderer
      .create(<Spinner percentage={50} radius={150} thickness={8} />)
      .toJSON()
  ).toMatchSnapshot();

  expect(
    renderer
      .create(<Spinner percentage={75} radius={130} thickness={6} />)
      .toJSON()
  ).toMatchSnapshot();
});

test("shows the correct percentage value", async () => {
  render(<Spinner percentage={50} />);
  const spinner = await screen.getByTestId("spinner-value");
  expect(getNodeText(spinner)).toBe("50");
});

test("shows the correct accessibility values", async () => {
  const { rerender } = render(<Spinner percentage={50} />);
  const spinner = await screen.getByTestId("spinner");

  expect(spinner).toHaveAttribute("aria-busy", "true");
  expect(spinner).toHaveAttribute("aria-valuenow", "50");

  rerender(<Spinner percentage={100} />);
  expect(spinner).toHaveAttribute("aria-busy", "false");
  expect(spinner).toHaveAttribute("aria-valuenow", "100");
});

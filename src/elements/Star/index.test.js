import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("Should have props [value, height, width, spacing]", () => {
  const height = 40,
    width = 40,
    spacing = 4;
  const { container } = render(
    <Star width={width} height={height} value={3.6} spacing={spacing} />
  );
  const yellowStar = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(yellowStar)).toBeInTheDocument();
  expect(container.querySelector(yellowStar)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(yellowStar)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(yellowStar)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});

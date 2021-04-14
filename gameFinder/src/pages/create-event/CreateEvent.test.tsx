import React from "react";
import { render, screen } from "@testing-library/react";
import CreateEvent from "./CreateEvent";
import  wrapper  from '../../config/react-query-test';

test("Header contains correct text", () => {
  render(<CreateEvent />, { wrapper });
  const text = screen.getByText("Select a game");
  expect(text).toBeInTheDocument();
});

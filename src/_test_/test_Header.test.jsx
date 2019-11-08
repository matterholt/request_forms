// query utilities:
import React from "react";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  render,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait
} from "@testing-library/react";
// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";

import Header from "./component/Header";

test("renders the Header", () => {
  const { getHeading } = render(<Header titleHeader={titleHeader} />);
});

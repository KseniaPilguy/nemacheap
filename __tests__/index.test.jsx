import { render, cleanup, fireEvent } from "@testing-library/react";

import SearchInput from '../src/components/SearchInput/index';

afterEach(cleanup);

describe("SearchInput component testing", () => {
  it("should be able to type inside input field", () => {
    const { getByTestId } = render (<SearchInput />);

    fireEvent.change(getByTestId("search_input"), { target: { value: "Movie name" } });
    expect(getByTestId("search_input").value).toBe("Movie name");
  })

  it("should be able to type empty string inside input field", () => {
    const { getByTestId } = render (<SearchInput />);

    fireEvent.change(getByTestId("search_input"), { target: { value: "" } });
    expect(getByTestId("search_input").value).toBe("");
  }) 
})
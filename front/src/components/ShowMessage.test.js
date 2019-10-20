import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import ShowMessage from "./ShowMessage";
import { fireEvent, render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Check that sending a message will pop up the toast with same text & closes ok", async () => {
  // mock out window.fetch for the test
  const fakeMessageResponse = { message: "Testing Message" };
  jest.spyOn(window, "fetch").mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeMessageResponse)
    });
  });

  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <ShowMessage />
    </Provider>
  );

  //Fill the input with fake message & send it
  fireEvent.change(getByTestId("message-input"), {
    target: { value: fakeMessageResponse.message }
  });
  fireEvent.click(getByText(/Send Message/i));

  //Checks whether the text is in the toast & closes it
  await wait(() => {
    expect(getByTestId("toast-body")).toHaveTextContent(/^Testing Message$/);
    fireEvent.click(getByText(/Close/i));
    expect(getByTestId("message-input")).toHaveValue(
      fakeMessageResponse.message
    );
  });
});

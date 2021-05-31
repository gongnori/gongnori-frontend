import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { API_SERVER } from "@env";
import { rest } from "msw";
import { setupServer } from "msw/node";
import RegisterResultModal from "../../components/RegisterResultModal";
import store from "../../store/store";

describe("<RegisterResultModal />", () => {
  const server = setupServer(
    rest.patch(`${API_SERVER}/team/rank`, (req, res, ctx) => {
      return res(ctx.json({ message: "sucess", data: null, error: null }));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("press button should request server and close modal", async () => {
    const mockFn = jest.fn();

    const { queryByTestId } = render(
      <Provider store={store}>
        <RegisterResultModal
          setIsModal={mockFn}
          visible={true}
          message={{ guest: {}, host: {} }}
        />
      </Provider>
    );

    const $touchableWithoutFeedback = queryByTestId("touchable-without-feedback");
    const $customButton = queryByTestId("custom-button");

    fireEvent.press($customButton);

    await waitFor(() => fireEvent.press($touchableWithoutFeedback));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

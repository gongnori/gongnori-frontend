import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ModalButton from "../../components/ModalButton";

jest.mock("react-native-vector-icons/Ionicons", () => "Icon");

describe("<ModalButton />", () => {
  test("event listener should execute with button pressed", () => {
    const mockFn = jest.fn();

    const { queryByTestId } = render(
      <ModalButton
        setIsModal={mockFn}
        icon={"plus"}
        style={{}}
      />
    );

    const $touchableOpacity = queryByTestId("touchable-opactiy");

    fireEvent.press($touchableOpacity);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

const viewLoadingScreen = () => ({
  type: "VIEW_LOADING_SCREEN",
});

const hideLoadingScreen = () => ({
  type: "HIDE_LOADING_SCREEN",
});

const viewHeaderRightLoading = () => ({
  type: "VIEW_HEADER_RIGHT_LOADING",
});

const hideHeaderRightLoading = () => ({
  type: "HIDE_HEADER_RIGHT_LOADING",
});

export {
  viewLoadingScreen,
  hideLoadingScreen,
  viewHeaderRightLoading,
  hideHeaderRightLoading,
};

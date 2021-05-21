const viewLoginRequest = () => ({
  type: "VIEW_LOGIN_REQUEST",
});

const hideLoginRequest = () => ({
  type: "HIDE_LOGIN_REQUEST",
});

const viewInputAlert = () => ({
  type: "VIEW_INPUT_ALERT",
});

const hideInputAlert = () => ({
  type: "HIDE_INPUT_ALERT",
});

const viewMatchLoading = () => ({
  type: "VIEW_MATCH_LOADING",
});

const hideMatchLoading = () => ({
  type: "HIDE_MATCH_LOADING",
});

const viewRankLoading = () => ({
  type: "VIEW_RANK_LOADING",
});

const hideRankLoading = () => ({
  type: "HIDE_RANK_LOADING",
});

const viewMessageLoading = () => ({
  type: "VIEW_MESSAGE_LOADING",
});

const hideMessageLoading = () => ({
  type: "HIDE_MESSAGE_LOADING",
});

const viewHeaderRightLoading = () => ({
  type: "VIEW_HEADER_RIGHT_LOADING",
});

const hideHeaderRightLoading = () => ({
  type: "HIDE_HEADER_RIGHT_LOADING",
});

const viewCompletion = () => ({
  type: "VIEW_COMPLETION",
});

const hideCompletion = () => ({
  type: "HIDE_COMPLETION",
});

export {
  viewLoginRequest,
  hideLoginRequest,
  viewInputAlert,
  hideInputAlert,
  viewMatchLoading,
  hideMatchLoading,
  viewRankLoading,
  hideRankLoading,
  viewMessageLoading,
  hideMessageLoading,
  viewHeaderRightLoading,
  hideHeaderRightLoading,
  viewCompletion,
  hideCompletion,
};

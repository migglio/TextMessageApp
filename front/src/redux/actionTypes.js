export const MESSAGE_RECEIVED_SUCCESS = "MESSAGE_RECEIVED_SUCCESS";
export const MESSAGE_RECEIVED_FAILED = "MESSAGE_RECEIVED_FAILED";

export const onMessageReceivedSuccess = message => {
  return {
    type: MESSAGE_RECEIVED_SUCCESS,
    payload: { message, error: false }
  };
};

export const onMessageReceivedFailed = error => {
  return { type: MESSAGE_RECEIVED_FAILED, payload: { error: error } };
};

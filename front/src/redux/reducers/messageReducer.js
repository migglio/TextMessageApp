import {
  MESSAGE_RECEIVED_SUCCESS,
  MESSAGE_RECEIVED_FAILED
} from "../actionTypes";

const initialState = {
  message: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED_SUCCESS:
      return {
        message: action.payload.message,
        error: ""
      };
    case MESSAGE_RECEIVED_FAILED:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

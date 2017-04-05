import { MESSAGE_SEND, TYPING_SHOW, TYPING_HIDE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  typing: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_SEND: {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    case TYPING_SHOW: {
      return {
        ...state,
        typing: true
      };
    }
    case TYPING_HIDE: {
      return {
        ...state,
        typing: false
      };
    }
    default: return state;
  }
}
import uniqBy from 'lodash/uniqBy';
import { MESSAGE_SEND, MESSAGE_RECEIVE } from '../actions/types';

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
    case MESSAGE_RECEIVE: {
      return {
        ...state,
        data: uniqBy([...state.data, action.payload], 'id')
      };
    }
    default: return state;
  }
}

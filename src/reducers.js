import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return action.payload.text;
    case 'RESET_TEXT':
      return '';
    default:
      return state;
  }
};

export default combineReducers({
    text,
});
import {LOGIN_ACTION} from '../types';
const INITIAL_STATE = {
  user: null,
};
const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        user: action?.payload,
      };
    default:
      return state;
  }
};
export default authReducer;

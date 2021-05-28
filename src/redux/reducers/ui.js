import * as types from "../constants/ui";

const initialState = {
  toggleSideBar: false,
  toggleForm: false,
};
const ui = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDE_BAR:
      return {
        ...state,
        toggleSideBar: !state.toggleSideBar,
      };
    case types.TOGGLE_FORM:
      return {
        ...state,
        toggleForm: !state.toggleForm,
      };
    default:
      return { ...state };
  }
};

export default ui;

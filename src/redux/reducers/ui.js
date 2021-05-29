import * as types from "../constants/ui";

const initialState = {
  modalOpen: false,
  toggleForm: false,
  users: [],
};
const ui = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        users: !state.modalOpen ? action.payload : [],
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

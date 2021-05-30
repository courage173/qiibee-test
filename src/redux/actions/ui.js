import * as types from "../constants/ui";

export const toggleModal = (id) => {
  return {
    type: types.TOGGLE_MODAL,
    payload: id,
  };
};

export const toggleForm = (payload) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_FORM,
    payload,
  });
};

import * as types from "../constants/ui";

// export const toggleSidebar = () => {
//   return {
//     type: types.TOGGLE_SIDE_BAR,
//   };
// };

export const toggleModal = () => {
  return {
    type: types.TOGGLE_MODAL,
  };
};

export const toggleForm = (data) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_FORM,
  });
};

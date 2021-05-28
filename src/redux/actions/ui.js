import * as types from "../constants/ui";

// export const toggleSidebar = () => {
//   return {
//     type: types.TOGGLE_SIDE_BAR,
//   };
// };

// export const toggleForm = () => {
//   return {
//     type: types.TOGGLE_FORM,
//   };
// };

export const toggleForm = (data) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_FORM,
  });
};

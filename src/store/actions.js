import C from '../services/constants'

// export const addExercise = (event, id) => ({
//   type: C.ADD_EXERCISE,
//   event,
//   id
// }

  // with thunk
      // (dispatch) => {
      //     dispatch({
      //         type: C.ADD_TO_CART,
      //         event,
      //         id
      //     })
      //     setTimeout(() =>
      //         dispatch({ type: C.CLOSE_MODAL }),
      //         2500
      //     )
      // }
// )

export const addNewExercise = (name, group, history) => ({
  type: C.ADD_NEW_EXERCISE,
  name,
  group,
  history
})

export const removeExercise = (event, id) => ({
  type: C.REMOVE_EXERCISE,
  event,
  id
})
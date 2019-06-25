import { connect } from 'react-redux'
import { 
  // addExercise, 
  removeExercise } from '../store/actions'
import Exercises from '../components/Exercises'

export const ExercisesContainer = connect (
  state => ({
    exercises: state.workState.exercises
  }),
  dispatch => ({
    // onAddClick(e,id) {
    //   dispatch(addExercise(e,id))
    // },
    onRemoveClick(e,id) {
      dispatch(removeExercise(e,id))
    }
  })
)(Exercises)
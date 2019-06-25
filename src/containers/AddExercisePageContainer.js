import { connect } from 'react-redux'
import { addNewExercise } from '../store/actions'
import AddExercisePage from '../components/AddExercisePage'

export const AddExercisePageContainer = connect (
  state => ({
    exercises: state.workState.exercises
  }),
  dispatch => ({
    onSaveNewExerciseClick(name, group, history) {
      dispatch(addNewExercise(name, group, history))
    }
  })
)(AddExercisePage)
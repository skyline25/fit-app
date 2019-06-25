import { connect } from 'react-redux'
// import { addNewExercise } from '../store/actions'
import ChooseExercise from '../components/ChooseExercise'

export const ChooseExerciseContainer = connect (
  state => ({
    schedule: state.workState.schedule,
    exercises: state.workState.exercises,
    workDays: state.workState.workDays
  }),
  dispatch => ({

  })
)(ChooseExercise)
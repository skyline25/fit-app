import { connect } from 'react-redux'
import { chooseScheduleDayExercise } from '../store/actions'
import ChooseExercise from '../components/ChooseExercise'

export const ChooseExerciseContainer = connect (
  state => ({
    schedule: state.workState.schedule,
    exercises: state.workState.exercises,
    workDays: state.workState.workDays
  }),
  dispatch => ({
    onChooseExercise(dayID, exerciseID, history) {
      dispatch(chooseScheduleDayExercise(dayID, exerciseID, history))
    }
  })
)(ChooseExercise)
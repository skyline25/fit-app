import { connect } from 'react-redux'
import { removeScheduleDayExercise } from '../store/actions'
import ScheduleDay from '../components/ScheduleDay'

export const ScheduleDayContainer = connect (
  state => ({
    exercises: state.workState.exercises,
    schedule: state.workState.schedule,
    workDays: state.workState.workDays
  }),
  dispatch => ({
    onRemoveExerciseClick( dayID, exerciseID ) {
      dispatch(removeScheduleDayExercise( dayID, exerciseID ))
    }
  })
)(ScheduleDay)
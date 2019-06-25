import { connect } from 'react-redux'
// import { addNewExercise } from '../store/actions'
import ScheduleDay from '../components/ScheduleDay'

export const ScheduleDayContainer = connect (
  state => ({
    exercises: state.workState.exercises,
    schedule: state.workState.schedule,
    workDays: state.workState.workDays
  }),
  dispatch => ({
    // removeExerciseFromSchedule( dayID, exerciseID )
  })
)(ScheduleDay)
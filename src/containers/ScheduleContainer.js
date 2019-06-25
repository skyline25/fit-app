import { connect } from 'react-redux'
// import { addNewExercise } from '../store/actions'
import Schedule from '../components/Schedule'

export const ScheduleContainer = connect (
  state => ({
    exercises: state.workState.exercises,
    schedule: state.workState.schedule,
    workDays: state.workState.workDays
  }),
  dispatch => ({

  })
)(Schedule)
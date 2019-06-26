import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ScheduleDay.scss'
import PageTemplate from '../PageTemplate'

const ScheduleDay = ({match, schedule, exercises, workDays, onRemoveExerciseClick}) => {

  const scheduleDay = schedule.days.find(day => {
    return (
      day.id === match.params.dayID
    )
  })

  const handleRemove = (event, dayID, exerciseID ) => {
    event.preventDefault()

    onRemoveExerciseClick( dayID, exerciseID )
  }

  return (
    <PageTemplate>
      <>
        <h1>День расписания</h1>
        <h2>{match.params.dayID}</h2>
        <ul>{scheduleDay.exercises.map(exercise => {
          return (
            <li key={exercise.id}>
              {exercise.name} <a onClick={e=>handleRemove(e, scheduleDay.id, exercise.id)}>Удалить</a>
            </li>
          )
        })}</ul>
        <Link to={`/choose-exercise/${match.params.dayID}`}>Добавить упражнение</Link>
      </>
    </PageTemplate>
  )
}

ScheduleDay.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default ScheduleDay
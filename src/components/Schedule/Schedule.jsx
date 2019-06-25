import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Schedule.scss'
import PageTemplate from '../PageTemplate'

const Schedule = ({schedule, exercises, workDays}) => {
  return (
    <PageTemplate>
      <>
        <h1>Расписание</h1>
        <h2>{schedule.name}</h2>
        <ul>
          {schedule.days.map((day)=>{
            return (
              <li key={day.id}>
                <span>{day.name}</span>
                <Link to={`/schedule/${day.id}`} className="setup">Настроить</Link>
                <ul>
                  {day.exercises.map((exercise)=>{
                    return (
                      <li key={exercise.id}>{exercise.name}</li>
                    )
                  })}
                </ul>
              </li>
            ) 
          })}
        </ul>
      </>
    </PageTemplate>
  )
}

Schedule.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default Schedule
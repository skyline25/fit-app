import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './ChooseExercise.scss'
import PageTemplate from '../PageTemplate'

const ChooseExercise = ({exercises, schedule, workDays, history, match, onChooseExercise}) => {
  const handleAddExcClik = (event, exerciseID) => {
    event.preventDefault()
    
    onChooseExercise(match.params.dayID, exerciseID, history)
  }

  const scheduleDay = schedule.days.find(day => {
    return schedule.id === match.params.dayID
  })

  // const avalibleExercises = exercises.filter((exercise) => {
  //   return (
  //     scheduleDay.exercises.find(e=>{
        
  //     })
  //   ) 
  // })

  return (
    <PageTemplate>
      <>
        <h1>Список упражнений</h1>
        <ul>
          {/* Добавить фильтр по находящимся упражнения в текущем дне */}
          {exercises.map((exercise) => {
            return (
              <li key={exercise.id}>
                {exercise.name}<a className="margin-left" onClick={e=>handleAddExcClik(e, exercise.id)}>Выбрать</a>
              </li>
            )
          })}
        </ul>
      </>
    </PageTemplate>
  )
}

ChooseExercise.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default ChooseExercise
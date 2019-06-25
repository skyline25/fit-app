import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './ChooseExercise.scss'
import PageTemplate from '../PageTemplate'

const ChooseExercise = ({exercises, schedule, workDays, history}) => {
  
  const handleAddExcClik = (event) => {
    event.preventDefault()

    
  }

  return (
    <PageTemplate>
      <>
        <h1>Список упражнений</h1>
        <ul>
          {exercises.map((exercise) => {
            return (
              <li key={exercise.id}>
                {exercise.name}<a className="margin-left" onClick={e=>handleAddExcClik(e)}>Выбрать</a>
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
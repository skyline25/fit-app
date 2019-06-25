import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ExerciseList.scss'
import PageTemplate from '../PageTemplate'

const ExerciseList = ({ exercises, onAddClick, onRemoveClick }) => {

  console.log(`ExerciseList ${exercises}`)

  return (
    <PageTemplate>
      <>
        <h1>Выбрать упражнение</h1>
        <ul className="exercise-list">
          {exercises.map(exercise => {
            return (
              <li key={exercise.id} className="exercise-list__item">
                <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>
                <a onClick={(e)=>{onRemoveClick(e,exercise.id)}}>Удалить упражнение</a>
              </li>
            )
          })}
        </ul>
        <p>
          <a onClick={(e)=>{onAddClick(e)}}>Добавить упражнение</a>
        </p>
      </>
    </PageTemplate>
  )
}

ExerciseList.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default ExerciseList
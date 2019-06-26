import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Exercises.scss'
import PageTemplate from '../PageTemplate'

const Exercises = ({ exercises, onAddClick, onRemoveClick }) => {
  return (
    <PageTemplate>
      <>
        <h1>Список упражнений</h1>
        <ul className="exercise-list">
          {exercises.sort((a,b)=>{
            return a.id > b.id ? 1 : -1
            // После добавления порядка в состояние "order", исправить сортировку на .order
          }).map(exercise => {
            return (
              <li key={exercise.id} className="exercise-list__item">
                <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>
                <span className="margin">{exercise.group}</span>
                <a onClick={(e)=>{onRemoveClick(e,exercise.id)}}>Удалить</a>
              </li>
            )
          })}
        </ul>
        <p>
          <Link to={`/add-exercise`}>Добавить упражнение</Link>
          {/* <a onClick={(e)=>{onAddClick(e)}}>Добавить упражнение</a> */}
        </p>
      </>
    </PageTemplate>
  )
}

Exercises.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default Exercises
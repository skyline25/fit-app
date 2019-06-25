import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './Start.scss'
import PageTemplate from '../PageTemplate'
// import Stopwatch from '../Stopwatch'

const Start = () => {
  return (
    <PageTemplate>
      <>
        <h1>Начать тренировку</h1>
        <div className="">
          {/* <Stopwatch/> */}
        </div>
        <div className="">
          <h2>Список упражнений</h2>
          {/* <a onClick={(e)=>{
            e.preventDefault()

            let newItemID

            if (exercises.length > 9 && exercises.length < 100) newItemID = `ex0${exercises.length + 1}`
            if (exercises.length < 10) newItemID = `ex00${exercises.length + 1}`

            let newItem = {id: newItemID, name: 'Приседания с гантелями', description: 'Описание упражнения'}
            setExercises(exercises.concat(newItem))
          }}>Добавить упражнение</a>
          
          <ul>{exercises.map((exercise) => {
            return (
              <li key={exercise.id}>
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
                <p>{exercise.id}</p>
              </li>
            )
          })}</ul> */}
        </div>
      </>
    </PageTemplate>
  )
}

Start.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default Start
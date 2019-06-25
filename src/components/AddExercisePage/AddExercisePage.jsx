import React from 'react'
import PropTypes from 'prop-types'
import './AddExercisePage.scss'
import PageTemplate from '../PageTemplate'

const AddExercisePage = ({exercises, history, onSaveNewExerciseClick}) => {
  
  console.log(exercises)

  const saveHandler = (event) => {
    event.preventDefault()
    
    const name = document.querySelector('#exercise-name').value
    const group = document.querySelector('#exercise-group').value

    onSaveNewExerciseClick(name, group, history)
  }

  return (
    <PageTemplate>
      <>
        <h1>Добавить упражнение</h1>
        <label htmlFor="exercise-name">
          <p>Название:</p>
          <input id="exercise-name" type="text" name="name"/>
        </label>
        <label htmlFor="exercise-group">
          <p>Группа мышц:</p>
          <select name="group" id="exercise-group">
            <option value="Спина">Спина</option>
            <option value="Ноги">Ноги</option>
            <option value="Плечи">Плечи</option>
            <option value="Руки">Руки</option>
            <option value="Шея">Шея</option>
          </select>
        </label>
        <p>
          <a onClick={(event)=>saveHandler(event)}>Сохранить</a>
        </p>
      </>
    </PageTemplate>
  )
}

AddExercisePage.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default AddExercisePage
import React from 'react'
import PropTypes from 'prop-types'
import './ExercisePage.scss'
import PageTemplate from '../PageTemplate'

const ExercisePage = ({ match }) => {
  return (
    <PageTemplate>
      <>
        <h1>{`Страница упражнения ${match.params.exerciseID}`}</h1>
      </>
    </PageTemplate>
  )
}

ExercisePage.propTypes = {
  match: PropTypes.object,
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default ExercisePage
import React from 'react'
import PropTypes from 'prop-types'
import './WorkDay.scss'
import PageTemplate from '../PageTemplate'

const WorkDay = ({ match, ...others}) => {
  console.log(others)
  return (
    <PageTemplate>
      <>
        <h1>{`День ${match.params.dayID}`}</h1>
      </>
    </PageTemplate>
  )
}

WorkDay.propTypes = {
  match: PropTypes.object,
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default WorkDay
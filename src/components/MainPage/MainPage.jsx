import React from 'react'
import PropTypes from 'prop-types'
import './MainPage.scss'
import PageTemplate from '../PageTemplate'

const MainPage = () => {
  return (
    <PageTemplate>
      <>
        <h1>MainPage - Dashbord</h1>
      </>
    </PageTemplate>
  )
}

MainPage.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default MainPage
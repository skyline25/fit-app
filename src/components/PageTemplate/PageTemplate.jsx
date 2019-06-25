import React from 'react'
import PropTypes from 'prop-types'
import './PageTemplate.scss'

import Menu from '../Menu'

const PageTemplate = ({children}) => {
  return (
    <div className="template__container">
      <div className="template__header">
        <Menu/>
      </div>
      <div>
        <div className="template__content">
          {children}
        </div>
      </div>
    </div>
  )
}

PageTemplate.propTypes = {
    children: PropTypes.element
}

export default PageTemplate
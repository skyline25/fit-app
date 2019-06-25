import React from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'
import './Menu.scss'

const Menu = () => {
  return (
    <nav className="nav">
      <NavLink 
        to="/"
        className="nav__link"
        activeClassName="is-active"
        exact={true}
      >Главная</NavLink>

      <NavLink 
        to="/start"
        className="nav__link"
        activeClassName="is-active"
        exact={true}
      >Начать тренировку</NavLink>

      <NavLink 
        to="/schedule"
        className="nav__link"
        activeClassName="is-active"
        exact={true}
      >Расписание</NavLink>
      
      <NavLink 
        to="/exercises" 
        className="nav__link"
        activeClassName="is-active"
        exact={true}
      >Список упражнений</NavLink>
      
      <NavLink 
        to="/statistic"
        className="nav__link"
        activeClassName="is-active"
        exact={true}
      >Статистика</NavLink>

    </nav>
  )
}

// Menu.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
// }

export default Menu
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './WorkDayList.scss'
import PageTemplate from '../PageTemplate'
import initialState from '../../data/data.json'

const WorkDayList = () => {
  const [ scheduleDays, setScheduleDays ] = useState(initialState.scheduleDays)

  return (
    <PageTemplate>
      <>
        <h1>Дни занятий:</h1>
        <ul className="work-day__list">        
          {
            scheduleDays.map((day)=>{
              return (
                <li className="work-day__item" key={day.id}>
                  <Link to={`/work-day-list/${day.id}`}>{`День ${day.name}. ${day.desc}`}</Link>
                </li>
              )
          })}     
        </ul>
      </>
    </PageTemplate>
  )
}

WorkDayList.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default WorkDayList
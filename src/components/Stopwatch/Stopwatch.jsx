import React from 'react'
import PropTypes from 'prop-types'
import './Stopwatch.scss'
import StopwatchClass from '../../services/stopwatch'

const inner = `
  <div class="inner">
    <div class="stopwatch"></div>
    <ul class="results"></ul>
  </div>`

const stopwatch = new StopwatchClass(
  inner.querySelector('.stopwatch'),
  inner.querySelector('.results'));

const Stopwatch = () => {
  return (
    <>
      <h2>Stopwatch</h2>
      <nav class="controls">
        <a href="#" class="button" onClick={stopwatch.start()}>Start</a>
        <a href="#" class="button" onClick={stopwatch.lap()}>Lap</a>
        <a href="#" class="button" onClick={stopwatch.stop()}>Stop</a>
        <a href="#" class="button" onClick={stopwatch.restart()}>Restart</a>
        <a href="#" class="button" onClick={stopwatch.clear()}>Clear Laps</a>
      </nav>
      {inner}
    </>
  )
}

Stopwatch.propTypes = {
  // history: PropTypes.object,
  // products: PropTypes.array,
  // onProductClick: PropTypes.func,
}

export default Stopwatch
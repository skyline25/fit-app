import React, {useState, useEffect} from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import MainPage from './components/MainPage'
import Start from './components/Start'
import Statistic from './components/Statistic'
import ExercisePage from './components/ExercisePage'
import { ExercisesContainer } from './containers/ExercisesContainer'
import { AddExercisePageContainer } from './containers/AddExercisePageContainer' 
import { ChooseExerciseContainer } from './containers/ChooseExerciseContainer' 
import { ScheduleContainer } from './containers/ScheduleContainer'
import { ScheduleDayContainer } from './containers/ScheduleDayContainer'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/start" component={Start}></Route>
            <Route exact path="/schedule" component={ScheduleContainer}></Route>
            <Route path="/schedule/:dayID" component={ScheduleDayContainer}></Route>
            <Route exact path="/exercises" component={ExercisesContainer}></Route>
            <Route path="/exercises/:exerciseID" component={ExercisePage}></Route>
            <Route path="/add-exercise" component={AddExercisePageContainer}></Route>
            <Route path="/choose-exercise" component={ChooseExerciseContainer}></Route>
            <Route path="/statistic" component={Statistic}></Route>
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  )
}

export default App
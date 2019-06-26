import C from '../services/constants'
import idCreator from '../services/idCreator'

export const workState = ( state={}, action ) => {

  let {exercises, schedule, workDays} = state

  switch (action.type) {
    case C.ADD_NEW_EXERCISE:
      let newID = idCreator('ex', exercises)

      let newItem = {
        id: newID, 
        name: action.name,
        group: action.group
      }
      
      action.history.push(`/exercises`)

      exercises = [...exercises, newItem]

      return { exercises, schedule, workDays }

    case C.REMOVE_EXERCISE:
      exercises = exercises.filter((item) => {
        if (item.id !== action.id) return item
      })

      return { exercises, schedule, workDays }
      
    case C.REMOVE_SCHEDULE_DAY_EXERCISE:
      schedule.days = schedule.days.map((day) => {
        if (day.id === action.dayID) {
          day.exercises = day.exercises.filter((exercise) => {
            if (exercise.id !== action.exerciseID) return exercise
          }) 
          
          return day
        }

        return day 
      })

      schedule = {...schedule}
      
      return { exercises, schedule, workDays }


    case C.CHOOSE_SCHEDULE_DAY_EXERCISE:
      let exercise = exercises.find((item) => {
        return item.id === action.exerciseID
      })

      schedule.days = schedule.days.map((day) => {
        if (day.id === action.dayID) {
          // let isAllredyInList = day.exercises.find((exercise) =>{
          //   return exercise.id === action.exerciseID
          // })
          // if (isAllredyInList) {
          //   return
          // }

          day.exercises = [...day.exercises, exercise]
          
          return day
        }

        return day
      })

      action.history.push(`/schedule/${action.dayID}`)

      schedule = {...schedule}

      return { exercises, schedule, workDays }
      
    default:
      return state
    }
}
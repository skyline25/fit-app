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

    // case C.CHOOSE_EXERCISE:
    //   exercises = exercises.filter((item) => {
    //     if (item.id !== action.id) return item
    //   })

    //   return { exercises, schedule, workDays }
      
    default:
      return state
    }
}
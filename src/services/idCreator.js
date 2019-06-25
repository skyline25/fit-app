const idCreator = (prefix, state) => {
  let idValue = '001'

  if (state.length > 0) {
    let [lastItem, ...others] = state.sort((a,b)=>{
      return a.title > b.title? 1: -1
    })
    
    idValue = +lastItem.id.slice(-3) + 1
    
    if (idValue > 9 && idValue < 100) idValue = `0${idValue}`
    if (idValue < 10) idValue = `00${idValue}`
  }
  
  return `${prefix}${idValue}`
}

export default idCreator

export const editRate = ({id, name})=> ({
  type: "EDIT", 
  payload: {
    id, 
    name, 
  }
})

export const addRate = ({name}) => ({
  type: "ADD", 
  payload: {
    id: Math.floor(Math.random()*1024),
    name,
  }
})
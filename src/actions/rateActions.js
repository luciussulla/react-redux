
export const editRate = ({id, name})=> ({
  type: "EDIT", 
  payload: {
    id, 
    name, 
  }
})
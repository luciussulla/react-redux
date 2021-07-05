
const initialState = [
  {
   id:1, name: "bobo", 
  },
  {
   id:2, name: "weewee"
  }
]

export const ratesReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD": 
      console.log("ADD in reducer")
      return state
    case "EDIT":
      console.log("EDIT in reducer")
      return state.map(rate => {
        if (rate.id === action.payload.id) {
          return action.payload
        } 
        return rate
      })
    default: 
      console.log("Default in reducer")
      return state
  }
}
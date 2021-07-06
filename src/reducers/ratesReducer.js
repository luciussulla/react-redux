
const initialState = [
  {
   id:1, name: "bobo", 
  },
  {
   id:2, name: "weewee"
  }
]

export const ratesReducer = (state=initialState, action) => {
  console.log('Bedziemy tworzyc nowy stan aplikacji')
  switch(action.type) {
    case "ADD": 
      console.log("ADD in reducer")
      return [...state, action.payload]
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
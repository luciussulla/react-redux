const initialState= [
  {id:1, name: "bobo"}, 
  {id:2, name: "lulu"}
]

const ratesReducer = (state=initialState, action)=> {
    console.log(action.payload)
    switch(action.type) {
      case "ADD": 
        console.log("Add called")
      return [...state, action.payload]
      case "EDIT": 
        console.log("EDIT called")
      return state
      default : 
        console.log("This action is not defined")
      return state
    }
}

export default ratesReducer 
// middleware needs to be connected to store 

export const validateAuthorMiddleware = store => next => action => {
  console.log("We are in middleware")
  console.log(action)
  if (action.type == "ADD" && !action.payload.name.length) {
    console.warn("Author must not be empty")
  }

  next(action)
}

export const addRate = (rateName) => {
  console.log("Inside the addRate function")
  return {
    type: "ADD", 
    payload: {
      id: Math.floor(Math.random()*1024), 
      name: rateName,
    }
  }
}
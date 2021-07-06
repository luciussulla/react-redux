import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {editRate, addRate} from '../actions/rateActions'

// editRate and addRate are both removed from props
// connect function is not longer necessary when using useDispatch

const RateForm = (
  {
    id,
    newName='',
    toggleFormCallback,
  }
)=> {
  console.log(id)
  const [name, setName] = useState(newName)

  const dispatch = useDispatch()

  const handleName = (e)=> {
    setName(e.target.value)
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    
    if (id) {
      dispatch(editRate({id, name}))
      toggleFormCallback()
      console.log("edit part of the form has been called")
    } else {
      console.log('Set name should be cleared')
      setName('')
      dispatch(addRate({name}))
    } 
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleName}/>
      <button type="submit">{id ? "Edit Rate" :  "Add Rate"}</button>
    </form>
  )
}


// const connectDispatchToProps = ({
//   addRate, 
//   editRate
// })

// // const RateFormConsumer = connect(null, connectDispatchToProps)(RateForm)
// // export default RateFormConsumer

export default RateForm
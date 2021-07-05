import {useState} from 'react'
import {connect} from 'react-redux'
import {editRate, addRate} from '../actions/rateActions'

const RateForm = (
  {
    id,
    newName='',
    editRate, 
    addRate,
    toggleFormCallback,
  }
)=> {
  console.log(id)
  const [name, setName] = useState(newName)
  const handleName = (e)=> {
    setName(e.target.value)
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    
    if (id) {
      editRate({id, name})
      toggleFormCallback()
      console.log("edit part of the form has been called")
    } else {
      console.log('Set name should be cleared')
      setName('')
      addRate({name})
    } 
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleName}/>
      <button type="submit">{id ? "Edit Rate" :  "Add Rate"}</button>
    </form>
  )
}

const connectDispatchToProps = ({
  addRate, 
  editRate
})

const RateFormConsumer = connect(null, connectDispatchToProps)(RateForm)
export default RateFormConsumer
import {useState} from 'react'
import {connect} from 'react-redux'
import {editRate} from '../actions/rateActions'

const EditRateForm = ({
  id,
  name,
  editRate, 
}) => {
  const [newName, setNewName] = useState(name)
  const handleNameChange = (e)=> {
    setNewName(e.target.value)
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    const newRateObj = {
      id,
      name: newName,
    }
    editRate(newRateObj)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:  
        <input onChange={handleNameChange} type="text" value={newName} />
      </label>
     
      <button type="submit">Edit</button>
    </form>
  )
}

// edit form consumer goes here
const mapActionToProps = ({
  editRate,
})

const EditRateFormConsumer = connect(null, mapActionToProps)(EditRateForm)

export default EditRateFormConsumer
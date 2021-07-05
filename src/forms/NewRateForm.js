import {useState} from 'react'
import {connect} from 'react-redux'
import {addRate} from '../actions/rateActions'

const NewRateForm = ({
    addRate,
  })=> {
    const [name, setName] = useState('')

    const handleName = (e)=> {
      setName(e.target.value)
    }

    const handleSubmit = (e)=> {
      e.preventDefault()
      console.log("New Rate form called")
      addRate({name})
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleName}/>
        <button type="submit">Add Rate</button>
      </form>
    )
}

const connectActionToProps = ({
  addRate, 
})

const NewFormConsumer = connect(null, connectActionToProps)(NewRateForm)
export default NewFormConsumer
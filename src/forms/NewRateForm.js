import React from 'react'
import {useState} from 'react'
import {addRate} from '../actions/rateActions'
import {connect} from 'react-redux'

const NewRateForm = ({addRate}) => {
  const [rate, setRate] = useState('')

  const handleSubmitRate = (e)=> {
    console.log("inside form handleSubmitRate function")
    e.preventDefault()
    addRate(rate)
    setRate('')
  }

  const handleAddRate = (e)=> {
    setRate(e.target.value)
  }

  return(
    <form onSubmit={handleSubmitRate}>
        <input onChange={handleAddRate} type="text" value={rate}/>
        <button type="submit">Add Rate</button>
    </form> 
  )
}

const connectDispatchToProps = ({
  addRate,
})

const NewRateFormConsumer = connect(null, connectDispatchToProps)(NewRateForm)
export default NewRateFormConsumer
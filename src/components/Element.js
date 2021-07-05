import {useState} from 'react' 
import EditRateForm from '../forms/EditRateForm'

const Element = ({rate})=> {
  const [isVisible, setIsVisible] = useState(false)
  const toggleFormCallback = ()=> {
    setIsVisible(prev=>!prev)
  }

  const formOrButton = isVisible
  ? 
    <EditRateForm id={rate.id} name={rate.name} toggleFormCallback={toggleFormCallback}/>
  :
    <button onClick={toggleFormCallback}>Edit Rate</button>

  console.log(rate)
  return (
    <div>
      <li>Here is the rate prop: {rate.name}</li>
      {formOrButton}
    </div>
  )
}

export default Element
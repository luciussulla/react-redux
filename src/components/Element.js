import {useState} from 'react' 
import RateForm from '../forms/RateForm'

const Element = ({rate})=> {
  const [isVisible, setIsVisible] = useState(false)
  const toggleFormCallback = ()=> {
    setIsVisible(prev=>!prev)
  }
  
  const formOrButton = isVisible
  ? 
    <RateForm id={rate.id} name={rate.name} toggleFormCallback={toggleFormCallback}/>
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
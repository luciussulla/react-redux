import {useState} from 'react' 
import EditRateForm from '../forms/EditRateForm'

const Element = ({rate})=> {
  const [isVisible, showIsVisible] = useState(true)
  const formOrButton = isVisible 
  ? 
    <EditRateForm id={rate.id} name={rate.name}/>
  :
    <button >Edit</button>


  console.log(rate)
  return (
    <div>
      <li>Here is the rate prop: {rate.name}</li>
      {formOrButton}
    </div>
  )
}

export default Element
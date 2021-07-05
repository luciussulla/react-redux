import { connect } from 'react-redux'
import Element from './Element'

const List = ({rates})=> {
  console.log(rates)
  return(
    <ul>
      {rates.map(rate => <Element key={rate.id} rate={rate}/>)}
    </ul>
  )
}

const connectStoreToProps = (store)=> ({
  rates: store.rates
})

const ListConsumer = connect(connectStoreToProps) 
export default ListConsumer(List)
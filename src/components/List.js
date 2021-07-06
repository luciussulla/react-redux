import { useSelector } from 'react-redux'
import Element from './Element'
// thanks to useSelector we can remove our props 

const List = ()=> {
  const rates = useSelector(store => store.rates)

  console.log(rates)
  return(
    <ul>
      {rates.map(rate => <Element key={rate.id} rate={rate}/>)}
    </ul>
  )
}

// const connectStoreToProps = (store)=> ({
//   rates: store.rates
// })

// const ListConsumer = connect(connectStoreToProps) 
// export default ListConsumer(List)

export default List
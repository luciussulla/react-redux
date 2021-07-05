import {connect} from 'react-redux'

const List = ({ratesStateFromStore})=> {
  return(
    <ul>
      {ratesStateFromStore.map(rate=><li key={rate.id}>{rate.name}</li>)}
    </ul>
  )
} 

const connectStateToProps = store => ({
  ratesStateFromStore: store.rates
})  

const ListConsumer = connect(connectStateToProps)(List)
export default ListConsumer
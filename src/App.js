import React from 'react' 
import {Provider} from 'react-redux'
import store from './stores/store'
import List from './components/List'
import RateForm from './forms/RateForm'


const App = ()=> {

    return (
      <>
        <Provider store={store}>
          <List/>
          <RateForm/>
        </Provider>
      </>
    )
}

export default App
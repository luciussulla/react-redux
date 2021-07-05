import React from 'react' 
import {Provider} from 'react-redux'
import store from './stores/store'
import List from './components/List'
import NewRateForm from './forms/NewRateForm'

const App = ()=> {

    return (
      <>
        <Provider store={store}>
          <List/>
        </Provider>
      </>
    )
}

export default App
import React from 'react'
import RoutesJs from './RoutesJs'
import { Provider } from 'react-redux'
import store from "./store/store"

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RoutesJs />
      </Provider>
    </div>
  )
}

export default App
import React from 'react'
import RoutesJs from './RoutesJs'
import { AuthProvider } from "./context/AuthContext"

const App = () => {
  return (
    <AuthProvider>
      <RoutesJs />
    </AuthProvider>
  )
}

export default App
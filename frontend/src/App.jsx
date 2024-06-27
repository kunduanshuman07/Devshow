import React from 'react'
import RoutesJs from './RoutesJs'
import { AuthProvider } from "./context/AuthContext"
import { MessageNotificationProvider } from "./context/MessageNotificationContext"

const App = () => {
  return (
    <AuthProvider>
      <MessageNotificationProvider>
        <RoutesJs />
      </MessageNotificationProvider>
    </AuthProvider>
  )
}

export default App
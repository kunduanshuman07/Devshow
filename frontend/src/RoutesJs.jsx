import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './container/Layout'
import LoginPage from './pages/LoginPage'

const RoutesJs = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<Layout />} />
      </Routes>
    </Router>
  )
}

export default RoutesJs
import React, { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from "./context/AuthContext"
import { LinearProgress } from '@mui/material';

const LoginPage = lazy(() => import("./pages/LoginPage"));
const Layout = lazy(() => import("./container/Layout"));

const RoutesJs = () => {
  const { auth, loading } = useAuth();
  if (loading) {
    return <LinearProgress />
  }
  return (
    <Routes>
      <Route path='/login' element={
        <Suspense fallback={<LinearProgress />}>
          <LoginPage />
        </Suspense>
      } />
      <Route path='/*' element={
        <Suspense fallback={<LinearProgress />}>
          {auth ? <Layout /> : <Navigate to="/login" replace />}
        </Suspense>
      } />
    </Routes>
  )
}

export default RoutesJs
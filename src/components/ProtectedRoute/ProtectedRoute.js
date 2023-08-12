import React from 'react'
import { Navigate } from 'react-router-dom'
import Preloader from '../Preloader/Preloader.js'

function ProtectedRoute({ element: Component, ...props }) {
  if (!props.userRequestDone) {
    return <Preloader />
  }
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default ProtectedRoute;
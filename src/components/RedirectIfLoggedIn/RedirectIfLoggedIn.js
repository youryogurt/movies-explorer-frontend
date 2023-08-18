import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from '../Preloader/Preloader.js'

function RedirectIfLoggedIn({ element: Component, ...props }) {
  return (
    !props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default RedirectIfLoggedIn;
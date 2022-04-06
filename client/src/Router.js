import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'

import Home from './components/Home'
import Login from './components/Login'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    // Check the cookies for a cookie called "loggedIn"
    return cookies["foo"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Navigate to="/login" />}
      />
    )
  }


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/watchlist" element={<Watchlist/>} />
            <Route path="/top100" element={<Top100/>} /> */}
        </Routes>
    );
};

export default Router;
import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Login from './Login'
import NewUser from './NewUser'


const Navigation = (props) => {
  const { setUsername, updateStatus, setUserID, userID, username, loggedIn } = props
  console.log("NavBar props: ", props)

  return (
    <AppBar  className="NavBar" position="relative">
          <Toolbar>
              <Typography variant="h6" style={{ flexGrow: "1" }}>
                <Link to={{pathname:'/', username: username, userID : userID }}>Coin Watcher</Link>
              </Typography>
              {loggedIn === false ? (
              <ul className="nav-list">
                <li className="nav-list-item">
                    <NewUser />
                </li>
                <li className="nav-list-item">
                  <Login updateStatus={updateStatus} setUsername={setUsername} setUserID={setUserID} userID={userID}/>
                </li>
              </ul> ) : (
              <ul className="nav-list">
                <li className="nav-list-item">
                  <button color="primary">
                    <Link to={'/'} onClick={(e) => {updateStatus(false)}}>Logout</Link>
                  </button>
                </li>
                <li className="nav-list-item">
                  <button color="primary">
                    <Link to={'/crypto'} >Crypto</Link>
                  </button>
                </li>
              </ul>
              )}
          </Toolbar>
      </AppBar>
    )
}

export default Navigation

import React from 'react'
import { Router, Route, Link } from 'react-router-dom'

import { history } from '@/_helpers'
import { authenticationService } from '@/_services'
import { PrivateRoute } from '@/_components'
import { HomePage } from '@/HomePage'
import { LoginPage } from '@/LoginPage'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    )
  }

  logout() {
    authenticationService.logout()
    history.push('/login')
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <img src={'./images/cat.jpg'} width="160" height="100" />
            <div className="col-md-6 offset-md-3"></div>
          </div>
        </div>
      </div>
    )
  }
}

export { App }

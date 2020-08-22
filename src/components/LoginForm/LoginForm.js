import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class LoginForm extends React.Component { 
  state={
    error:null
  }
  
  handleLoginSubmit = (ev) => {
    ev.preventDefault()
    this.setState({error:null})
    const {email, password} = ev.target

    fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        email:email.value,
        password:password.value
      })
    })
    .then(res => (!res.ok)
    ? res.json().then(e => Promise.reject(e))
    : res.json())
    .then(res => {
      TokenService.saveAuthToken(res.authToken)
      email.value = ''
      password.value = ''
      this.props.onLoginSuccess()
    })
    .catch(error => {
      this.setState({error})
    })
  }

  render() {
    const {error} = this.state
    console.log(error)
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <legend></legend>
          <fieldset>
            <div>
              <div>
                <label htmlFor="email" hidden>Email</label>
                <input name="email" id="email" placeholder="email"/>
              </div>
              <div>
                <label htmlFor="password" hidden>Password</label>
                <input type="password" name="password" id="password" placeholder="password (8 characters or more)"/>
              </div>
              <div>
                <button className="button-primary">Log In</button>
                <br></br>
                <div className="spacer-v"></div>
                <Link to='/register'>
                <button className='button-primary'>Register</button>
                </Link>
              </div>
            </div>
          </fieldset>
        </form>        
        {error && <div>{error.error}</div>}
      </div>
    )
  }  
}
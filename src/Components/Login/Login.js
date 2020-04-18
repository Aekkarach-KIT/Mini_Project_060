import React, { Component } from 'react'
import firebase from 'firebase'
import './Login.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: 'AIzaSyBj5Z4wVpkn7YYBbRHuefLQku5Yr9WDHbs',
  authDomain: 'miniproject-060.firebaseapp.com'
})

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log('user', user)
    })
  }

  render () {
    return (
      <div className='login'>
        {this.state.isSignedIn ? (
          <span>
            <p className='marquee'>
              <span> Welcome To PSU HARDWARE ONLINE</span>
            </p>
            <button
              className='button'
              onClick={() => firebase.auth().signOut()}
            >
              Sign out!
            </button>
            <h1 className='user'>
              !! Welcome {firebase.auth().currentUser.displayName} !!
            </h1>
            <img
              alt='profile pic'
              width='200px'
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default Login

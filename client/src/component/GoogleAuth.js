import React, { useEffect } from 'react';
import env from 'dotenv';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

function GoogleAuth(props) {
  useEffect(() => {
    env.config();
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: 'email'
        })
        .then(() => {
          let auth = window.gapi.auth2.getAuthInstance();
          auth.signIn(); //this is async
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);
  const onAuthChange = isSignedIn => {
    isSignedIn
      ? props.signIn(
          window.gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getId()
        )
      : props.signOut(
          window.gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getId()
        );
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  function renderAuthButton() {
    if (props.isSignedIn === null) {
      console.log('null is called');
      return null;
    } else if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui green google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  return <div>{renderAuthButton()}</div>;
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

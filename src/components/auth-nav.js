import React from 'react';
import AuthenticationButton from './authentication-button';

const AuthNav = () => (
  <div className="button-wrapper">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <AuthenticationButton />
    </div>
  </div>
);

export default AuthNav;

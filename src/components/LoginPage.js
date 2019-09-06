import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage =  (props) => (
    <div>
     <h1>Login Page</h1>
     <button onClick={props.startLogin}>Login</button>
    </div>
);

const mapdispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapdispatchToProps) (LoginPage)
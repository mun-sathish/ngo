import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BACKEND } from '../../util/Constant';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: BACKEND.LOGIN_URL, state: { from: props.location } }} />
    )} />
)
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
// import Login from './components/Login'


const checkAuth = () => (document.cookie === 'loggedIn=true') ? true : false;

const ProtectedRoute = ({ ...theRest }) => {
    if (checkAuth()) {
        return <Route {...theRest} />
    }
    else {
        return <Redirect to={{ pathname: '/login' }} />
    }
}

const Router = () => {
    return (
        <Switch>
            {/* <Route path="/login" component={Login} /> */}
            {/* <ProtectedRoute path="/addlisting" component={AddListing} /> */}
        </Switch>
    );
};

export default Router;
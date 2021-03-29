import React from 'react';
import SignIn from '../pages/SignIn';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const AuthRoutes: React.FC = () => {
    return (
        <Route path="/" exact component={SignIn} />
    );
}

export default AuthRoutes;
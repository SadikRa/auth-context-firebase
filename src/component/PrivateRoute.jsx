import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProviders } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthProviders)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true} ></Navigate>;
};

export default PrivateRoute;
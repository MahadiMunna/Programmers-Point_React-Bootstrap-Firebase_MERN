import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <Spinner className='align-center' animation="border" />;
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;
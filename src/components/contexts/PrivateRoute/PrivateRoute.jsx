import React, { use } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate, useNavigate } from 'react-router'

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    // const navigate = useNavigate()

    if (user && user?.email) {
        return { children }
    }
    else {
        return <Navigate to="/auth/login"></Navigate>
    }
}

export default PrivateRoute
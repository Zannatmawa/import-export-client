import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'
// import {createUserWithEmailAndPassword} from 'fir'

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [mode, setMode] = useState(false)

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const toggleMode = () => setMode(p => !p);
    // console.log(user, loading)
    //for Registaring user 
    const createUser = (email, image, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, image, password)
    }
    //for login user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    //sign in with google
    const signinWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //sign Out or Log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //for observing user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        createUser,
        signInUser,
        updateUser,
        signinWithGoogle,
        logOut,
        user,
        loading,
        setUser,
        setLoading,
        mode,
        setMode,
        toggleMode

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider
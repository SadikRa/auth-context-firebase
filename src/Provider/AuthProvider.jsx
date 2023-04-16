import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)
 
export const AuthProviders = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () =>{
        signOut(auth)
    }

    useEffect(()=>{
     const unscriber =    onAuthStateChanged(auth , currentUser =>{
            console.log('on auth change' , currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return() =>{
            unscriber()
        }

    }, [])
    const userInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading
    }

    return (
       <AuthProviders.Provider value={userInfo}>
            {children}
       </AuthProviders.Provider>
    );
};

export default AuthProvider;
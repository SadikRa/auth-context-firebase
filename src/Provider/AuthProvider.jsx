import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)
 
export const AuthProviders = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        createUser,
        signInUser
    }

    return (
       <AuthProviders.Provider value={userInfo}>
            {children}
       </AuthProviders.Provider>
    );
};

export default AuthProvider;
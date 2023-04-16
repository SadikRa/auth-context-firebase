import React, { useContext } from 'react';
import { AuthProviders } from '../Provider/AuthProvider';


const Home = () => {


    const user = useContext(AuthProviders)
    return (
        <div>
            <h1>hello world {user &&  <span>{user.name}</span>}</h1>
        </div>
    );
};

export default Home;
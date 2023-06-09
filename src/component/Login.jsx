import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProviders } from "../Provider/AuthProvider";

const Login = () => {

  const {signInUser} = useContext(AuthProviders)

  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signInUser(email, password)
    .then(result =>{
      const logger = result.user;
      console.log(logger)
      form.reset();
    })
    .catch(error => {
      console.log(error)
    })
}

  return (
  
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <form onSubmit={handleLogin}>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
          <Link to='/register'><button className="btn btn-link">New to auth </button></Link>
        </div>
        </form>
        
      </div>
    </div>
    
  );
};

export default Login;

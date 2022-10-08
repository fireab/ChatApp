import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">FireChat</span>
            <span className="title">Register</span>
            <form >
                <input type="text" placeholder='dispay name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avater</span>
                </label>
                <input id='file' type="file" style={{display:"none"}}/>
                <button >Signup</button>
            </form>
            <p>You have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
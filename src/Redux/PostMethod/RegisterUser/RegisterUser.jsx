import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserAction } from './registerUser';

const RegisterUser = () => {

  const dispatch = useDispatch();
  const registerUserReducer = useSelector((state) => state?.registerUserReducer)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterUser = () => {
    dispatch(registerUserAction({
      email: email,
      password: password,
    }));
  }

  useEffect(() => {
    console.log("NitinConsole", registerUserReducer);    
  }, [registerUserReducer])
  
  return (
    <>
    <div className='App'>
        <input type='email' onChange={(e) => {setEmail(e.target.value)}} />
        <input type='password' onChange={(e) => {setPassword(e.target.value)}} />
        <button type='submit' style={{width: "200px"}} onClick={() => handleRegisterUser()}>Register User</button>
    </div>
    <div className='user-details'>

    </div>
    </>
  )
}

export default RegisterUser
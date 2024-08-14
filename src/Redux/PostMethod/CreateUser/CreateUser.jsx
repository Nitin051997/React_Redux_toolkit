import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUserAction } from './createUser';

const CreateUser = () => {

    const dispatch = useDispatch();
    const createUserReducer = useSelector((state) => state?.createUserReducer);

    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleCreateUser = () => {
        dispatch(createUserAction({
            name: name,
            role: role,
        }));
    }

  return (
    <>
    <div className='App'>
        <input type='text' value={name} onChange={(e) => {setName(e.target.value)}} />
        <select value={role} onChange={(e) => {setRole(e.target.value)}}>
            <option value="NA">Select One</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Senior Dev.">Senior Dev.</option>
            <option value="Junior Dev.">Junior Dev.</option>
        </select>
        <button style={{width: "200px"}} onClick={() => {handleCreateUser()}}>Create_User</button>
    </div>
    <br />
    <div className='user-details'>
        {createUserReducer?.isCreateUserLoading ? "Loading...." 
        : createUserReducer?.createUserData ? 
        <>
        <span>Date: {createUserReducer?.createUserData?.createdAt}</span>
        <span>ID: {createUserReducer?.createUserData?.id}</span>
        </> 
        : createUserReducer?.isCreateUserError ? 
        <>
        <span>{createUserReducer?.isCreateUserError}</span>
        </> 
        : null }
    </div>
    </>
  )
}

export default CreateUser
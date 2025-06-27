import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ComponentTwo = () => {

    const navigate = useNavigate();

    const listofemployeesReducer = useSelector((state) => state?.listofemployeesReducer);

  return (
    <div>
        <button onClick={() => {
        navigate('/compone')
      }}>click for one</button>
      
      {
        !listofemployeesReducer?.listofemployeesloading ? <>{JSON.stringify(listofemployeesReducer?.listofemployeesdata)}</> : null
      }

    </div>
  )
}

export default ComponentTwo
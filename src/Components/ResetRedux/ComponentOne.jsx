import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listofemployees, reset } from './listofemployees.js';

const ComponentOne = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const listofemployeesReducer = useSelector((state) => state?.listofemployeesReducer);

    const handleApi = () => {
        let pageNo = 2;
        dispatch(listofemployees(pageNo));
    }

    useEffect(() => {
        console.log("nitinconsole", "inside useeffect");
        return () => {
            console.log("nitinconsole", "inside useeffect return");
            dispatch(reset());
        };
    }, [dispatch]);

  return (
    <div>
        <button onClick={() => {
        navigate('/comptwo')
      }}>click for two</button>

      <button onClick={() => handleApi()}>Click to call API</button>

      {
        !listofemployeesReducer?.listofemployeesloading ? <>{JSON.stringify(listofemployeesReducer?.listofemployeesdata)}</> : null
      }

    </div>
  )
}

export default ComponentOne
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subNumber } from '../../counterSlice';
import { singleUserAction } from './singleUser';
import { useEffect } from 'react';

export const SingleUser = () => {

    const displayNumber = useSelector((state) => state?.counter?.value);
    const singleUserReducer = useSelector((state) => state?.singleUserReducer);
  
    const dispatch = useDispatch();
  
    const handleFetchUser = (userId) => {
        dispatch(singleUserAction({userId: userId}))
    }

    useEffect(() => {
        console.log("NitinConsole", singleUserReducer);
    }, [singleUserReducer])

    return (
      <>
      <div className="App">
        <button onClick={() => {dispatch(subNumber())}}>Sub</button>
        <span>User Id: {displayNumber}</span>
        <button onClick={() => {dispatch(addNumber())}}>Add</button>
        <button className='fetch-data' onClick={() => {handleFetchUser(displayNumber)}}>Fetch Details</button>
      </div>
      <br />
      <div className='user-details'>
        {
        singleUserReducer?.isUserLoading ? 'Loading...' : singleUserReducer?.userData ?
        <>
            <span>Name: {singleUserReducer?.userData?.first_name + " " + singleUserReducer?.userData?.last_name}</span>
            <span>Email: {singleUserReducer?.userData?.email}</span>
            <img src={singleUserReducer?.userData?.avatar} style={{width: "90px", height: "100px"}} alt='Profile Pic'/>
        </>
        : singleUserReducer?.userData?.data?.length === 0 ? <><span>No Data Found</span></> 
        : singleUserReducer?.isUserError ? 
        <>
          <span>{JSON.stringify(singleUserReducer?.isUserError)}</span>
        </> 
        : null
        }
      </div>
      </>
    );

  }

export default SingleUser;
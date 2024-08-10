import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subNumber } from './Redux/counterSlice';
import { getUserDetails } from './Redux/getUser';
import { generalState } from './Redux/generalState';
import { listUsersAction } from './Redux/GetMethod/listUsers';

export const TestApi = () => {

    const displayNumber = useSelector((state) => state?.counter?.value);
    const userDetails = useSelector((state) => state?.user);
    const storeDetails = useSelector((state) => state?.generalStateReducer);
  
    const dispatch = useDispatch();
  
    const [data, setData] = useState(false);
  
    const handleFetchUserDetails = (useId) => {
        dispatch(getUserDetails({useId: useId}))
        dispatch(listUsersAction())
    }
  
    const handleStoreDetails = () => {
      let singleResult = userDetails?.userData;
      if(Array.isArray(storeDetails) || !storeDetails){
        setData(!storeDetails ? [singleResult] : [...storeDetails, singleResult])
      }
    }
  
    useEffect(() => {
      dispatch(generalState(data))
      return ;
    },[data, dispatch])

    return (
      <>
      <div className="App">
        <button onClick={() => {dispatch(subNumber())}}>Sub</button>
        <span>User ID: {displayNumber}</span>
        <button onClick={() => {dispatch(addNumber())}}>Add</button>
        <button className='fetch-data' onClick={() => {handleFetchUserDetails(displayNumber)}}>Fetch Details</button>
        <button className='fetch-data' onClick={() => {handleStoreDetails()}}>Store Details</button>
      </div>
      <br />
      <div className='user-details'>
        {
        userDetails.userLoading ? 'Loading...' : userDetails?.userData ?
        <>
          <span>User ID: {userDetails?.userData?.id}</span>
          <span>User Title: {userDetails?.userData?.title}</span>
          <span>Status: {JSON.stringify(userDetails?.userData?.completed)}</span>
        </>
        :
        userDetails?.userError ? 
        <>
          <span>{JSON.stringify(userDetails?.userError)}</span>
        </> 
        : null
        }
      </div>
      <div>
        <p>{JSON.stringify(storeDetails)}</p>
      </div>
      </>
    );

  }

export default TestApi;
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subNumber } from '../../counterSlice';
import { handleDelayAction } from './handleDelay';
import { useEffect } from 'react';

export const HandleDelay = () => {

    const displayNumber = useSelector((state) => state?.counter?.value);
    const handleDelayReducer = useSelector((state) => state?.handleDelayReducer);
  
    const dispatch = useDispatch();
  
    const handleFetchUserDetails = (pageNo) => {
        dispatch(handleDelayAction({pageNo: pageNo}))
    }

    useEffect(() => {
        console.log("NitinConsole", handleDelayReducer);
    },[handleDelayReducer])

    return (
      <>
      <div className="App">
        <button onClick={() => {dispatch(subNumber())}}>Sub</button>
        <span>Page Count: {displayNumber}</span>
        <button onClick={() => {dispatch(addNumber())}}>Add</button>
        <button className='fetch-data' onClick={() => {handleFetchUserDetails(displayNumber)}}>Fetch Details</button>
      </div>
      <br />
      <div className='user-details'>
        {
        handleDelayReducer?.isDelayLoading ? 'Loading...' : handleDelayReducer?.delayData?.data.length > 0 ?
        <>
        {handleDelayReducer?.delayData?.data.map((data, index) => {
            return (<>
                      <span>Name: {data?.first_name + " " + data?.last_name}</span>
                      <span>Email: {data?.email}</span>
                      <img src={data?.avatar} style={{width: "90px", height: "100px"}} alt='Profile Pic'/>
            </>)
        })}
        </>
        : handleDelayReducer?.delayData?.data?.length === 0 ? <><span>No Data Found</span></> 
        : handleDelayReducer?.isDelayError ? 
        <>
          <span>{JSON.stringify(handleDelayReducer?.isDelayError)}</span>
        </> 
        : null
        }
      </div>
      </>
    );

  }

export default HandleDelay;
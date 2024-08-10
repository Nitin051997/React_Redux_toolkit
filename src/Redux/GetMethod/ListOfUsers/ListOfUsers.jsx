import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subNumber } from '../../counterSlice';
import { listOfUserAction } from './listOfUsers';
import { useEffect } from 'react';

export const ListOfUser = () => {

    const displayNumber = useSelector((state) => state?.counter?.value);
    const listOfUserReducer = useSelector((state) => state?.listOfUserReducer);
  
    const dispatch = useDispatch();
  
    const handleFetchUserDetails = (pageNo) => {
        dispatch(listOfUserAction({pageNo: pageNo}))
    }

    useEffect(() => {
      console.log("NitinConsole", listOfUserReducer);
    },[listOfUserReducer])

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
        listOfUserReducer?.isListLoading ? 'Loading...' : listOfUserReducer?.dataList != [] ?
        <>
        {listOfUserReducer?.dataList?.data.map((data, index) => {
            return (<>
                      <span>Name: {data?.first_name + " " + data?.last_name}</span>
                      <span>Email: {data?.email}</span>
                      <img src={data?.avatar} style={{width: "90px", height: "100px"}} alt='Profile Pic'/>
            </>)
        })}
        </>
        :
        listOfUserReducer?.isListError ? 
        <>
          <span>{JSON.stringify(listOfUserReducer?.isListError)}</span>
        </> 
        : null
        }
      </div>
      </>
    );

  }

export default ListOfUser;
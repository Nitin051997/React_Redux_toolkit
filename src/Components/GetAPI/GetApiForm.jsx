import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { customGetDataAction } from '../../Redux/Custom/API/customGetData';

const GetApiForm = () => {

    const dispatch = useDispatch();
    const customGetDataReducer = useSelector((state) => state.customGetDataReducer);

    const [customApi, setCustomApi] = useState('');

    const handleFetchCustomAPI = () => {
        dispatch(customGetDataAction({
            "api": customApi,
        }));
    }

    useEffect(() => {
        console.log("NitinConsole",customGetDataReducer);
    }, [customGetDataReducer])

  return (
    <>
    <div className="App">
        <input type='text' style={{height: "50px", width: "600px", fontSize: "30px"}} onChange={(e) => {setCustomApi(e.target.value)}}/>
        <button style={{backgroundColor: "blue"}} onClick={() => handleFetchCustomAPI()}>Fetch</button>
    </div>
    <br />
    <div className='user-details'>
        {customGetDataReducer?.isCustomGetDataLoading ? "Loading..." 
        : customGetDataReducer?.customGetData ? 
        <>{JSON.stringify(customGetDataReducer?.customGetData)}</> 
        : customGetDataReducer?.isCustomGetDataError ? 
        <>{JSON.stringify(customGetDataReducer?.isCustomGetDataError)}</>
        : null
        }
    </div>
    </>
  )
}

export default GetApiForm
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listOfUserAction } from '../GetMethod/ListOfUsers/listOfUsers';

const Apicalls = () => {
    const dispatch = useDispatch();
    const listOfUserReducer = useSelector((state) => state?.listOfUserReducer);

    const [getPage, setGetPage] = useState({firstCall: null, secondCall: null});

    const fetchData = (PageNumber) =>  {
        return new Promise(() => {
            dispatch(listOfUserAction({pageNo: PageNumber}));
        })
    }

    const ClickBtn = () => {
        fetchData(10000)
        .then(fetchData(2))
        .catch((err) => {
            return console.log(err);
        })
    };

    useEffect(() => {
        if(!listOfUserReducer?.isListLoading && typeof listOfUserReducer?.dataList === "object"){
            if(getPage?.firstCall === null){
                setGetPage((old) => {
                    return {...old, firstCall: listOfUserReducer?.dataList?.page}
                })
            } else if(getPage?.firstCall !== null) {
                setGetPage((old) => {
                    return {...old, secondCall: listOfUserReducer?.dataList?.page}
                })
            }

        }
    }, [listOfUserReducer]);

  return (
    <>
        <button onClick={() => ClickBtn()}>Call API</button>
        <span>{JSON.stringify(getPage)}</span>
    </>
  )
}

export default Apicalls
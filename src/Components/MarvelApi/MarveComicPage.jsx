import React from 'react'
import { useDispatch } from 'react-redux'
import marvelapi from './marvelapi.js';

const MarveComicPage = () => {
    
    const dispatch = useDispatch();

    const handleMarvelApiCall = () => {
        let pageNo = 2;
        dispatch(marvelapi(pageNo));
    }

  return (
    <>
        <button onClick={() => handleMarvelApiCall()}>Click</button>
    </>
  )
}

export default MarveComicPage
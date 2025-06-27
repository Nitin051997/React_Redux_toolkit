import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

const Navigater = () => {
  return (
    <>
    <Routes>
        <Route path='/compone' element={<ComponentOne/>}/>
        <Route path='/comptwo' element={<ComponentTwo/>}/>
    </Routes>
    </>
  )
}

export default Navigater
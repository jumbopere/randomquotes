import React from 'react'
import {  Quotes, Joker, Navbar } from './components'
import { BrowserRouter, Routes,  Route} from 'react-router-dom'


const app = () => {
  return (
    <BrowserRouter>
    <div className='bg-gray-200'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Quotes/>}/>
        <Route path ='joker' element={<Joker/>}/>
      </Routes>
      <Joker/>
      </div>
      </BrowserRouter>
  )
}

export default app
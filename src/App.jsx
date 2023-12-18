import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Nav from './copmonents/Nav'
import Neworder from './copmonents/Neworder'
import Allorder from './copmonents/Allorder'

import Invoices from './copmonents/Invoices'
import Laboratories from './copmonents/Laboratories'
import Home from './copmonents/Home'

function App() {


  return (
    <div className="container ">
    <Nav/>
    <Routes>
    <Route path='/'element={<Home/>}/>
<Route path='/neworder'element={<Neworder/>}/>
<Route path='/Allorder'element={<Allorder/>}/>

<Route path='/Invoices'element={<Invoices/>}/>
<Route path='/Laboratories'element={<Laboratories/>}/>
    </Routes>
    </div>
  )
}

export default App

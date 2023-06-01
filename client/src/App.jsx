import React from 'react'
import './App.css'
import Header from './components/Header'
import AllUser from './components/AllUser'
import {Routes, Route} from "react-router-dom"
import AddUser from "./components/AddUser"
import Edit from "./components/Edit"
import Details from './components/Details'

function App() {

  return (
    <>
    <div>
    <Header />
    <Routes>
      <Route Component={AllUser} path='/'/>
      <Route Component={AddUser} path='/addUser'/>
      <Route Component={Edit} path='/edit/:id'/>
      <Route Component={Details} path="/view/:id"/>
    </Routes>
    </div>
    </>
  )
}

export default App

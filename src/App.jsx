import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/others/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './Utils/LocalStorage'

const App = () => {

  useEffect(() => {
    setLocalStorage
  
  },)
  
  return (
    <>
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
     <AdminDashboard/>
    </>
  )
}

export default App

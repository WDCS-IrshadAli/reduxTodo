import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center bg-black text-white p-2">

        <div>
            <img className="h-10 w-10 object-contain" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="logo" />
        </div>

        <div className="flex flex-row justify-around">
            <Link className="mx-1" to="/">Home</Link>
            <Link className="mx-1" to="/dashboard">Dashboard</Link>
            <Link className="mx-1" to="/login">Login</Link>
            <Link className="mx-1" to="/register">Register</Link>
            <Link className="mx-1" to="/todos">Todos</Link>
        </div>

        <div></div>

      </div>
    </>
  )
}

export default Header

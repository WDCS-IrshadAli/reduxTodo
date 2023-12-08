import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="h-[90vh] w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl mb-2">HOME</h1>
          <Link className="mr-2 p-2 bg-black text-white rounded" to="/login">Login</Link>
          <Link className="mr-2 p-2 bg-black text-white rounded" to="/dashboard">Dashboard</Link>
          <Link className="mr-2 p-2 bg-black text-white rounded" to="/register">Register</Link>
        </div>
      </div>
    </>
  )
}

export default Home
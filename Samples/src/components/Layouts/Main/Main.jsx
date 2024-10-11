import React from 'react'
import './Main.css'
import { Login } from '../../Login/Login'
export const Main = () => {
  return (
    <>
    <div className='Main'>
    <div className='Title'>
    <h1 className='JoinTitle'>WELCOME TO SAMPLE REQUESTS</h1>
    </div>
    <div className='LoginContainer'>
        <Login/>
    </div>
    </div>
    </>
  )
}

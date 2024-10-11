import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Link } from 'wouter';
import './index.css'
import { Home } from './components/Pages/Home/Home'
import { Requests } from './components/Pages/Requests/Requests'
import { NewRequests } from './components/Pages/NewRequests/NewRequests'
function App() {


  return (
    
    <div className='App'>
    {/* Navegación */}
    

    {/* Rutas */}
    <Route path="/" component={Home} />
    <Route path="/requests" component={Requests} />
    <Route path="/new-requests" component={NewRequests} />
  </div>
);
}
  

export default App

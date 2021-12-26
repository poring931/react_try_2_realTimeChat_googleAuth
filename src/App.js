import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import { Context } from './index.js';
import Loader from './components/Loader.js';


function App() {
      const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth) 
  if (loading){
    return <Loader/>
  }
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

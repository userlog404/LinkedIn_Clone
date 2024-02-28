import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.displayName,
        })
        );

      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header/>

      {!user ? (
      <Login/>
      ) : (
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets/>
      </div>)}
      
      </div>
  );
}

export default App;

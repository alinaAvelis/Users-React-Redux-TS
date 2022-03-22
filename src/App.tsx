import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './pages/users';
import  SideFilterBar from '../src/components/side-filter-bar/SideFilterBar';
import UserCardPage from './pages/user-card-page/userCardPage';


import "./App.scss";


const App = () => {

  return (
    <div className='page'>
      <main className='flex'>
      <SideFilterBar/>
       <Switch>
          <Route path='/:id'>
              <UserCardPage />
          </Route>

          <Route exact path="/">
              <Users />
          </Route>
        </Switch>
      </main>
  </div>
  );
}



export default App;
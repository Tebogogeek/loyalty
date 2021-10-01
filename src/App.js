import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import {useDispatch} from 'react-redux'

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import { login } from './action/add';
import Signin from './pages/Signin';
import Store from './pages/Stores';
import Loyalty from './pages/Loyalty';

function App() {
  const dispatch = useDispatch()

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change
//  useEffect(()=>{
//    dispatch(login())

//  },[])
  return (
    <>
      <Switch>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Signin/>
        </Route>
        <Route path="/store" >
          <Store/>
          </Route>
          <Route path="/loyalty" >
          <Loyalty/>
          </Route>
      </Switch>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Enter from './components/Enter';
// import form from './components/pages/form';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Switch> */}
          <Route path='/' exact component={Home} />
        
          <Route path='/products' component={Products} />
          <Route path='/Enter' component={Enter} />
          <Route path='/SignUp' component={SignUp} />
      
        

          {/* <Route path='/form' component={SignUp} /> */}

        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;

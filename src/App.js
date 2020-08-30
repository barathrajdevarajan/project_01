import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Printed from './components/pages/PrintedWooden';
import DIY from './components/pages/Diykits';
import Hand from './components/pages/Hand';

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/printingwoodenblocks' component={Printed} />
            <Route exact path='/diykits' component={DIY} />
            <Route
              exact
              path='/handcarvedWoodenCandles'
              component={Hand}
            />{' '}
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;

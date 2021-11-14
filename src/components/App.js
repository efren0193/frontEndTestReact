import React from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom'

import Nav from './Nav'
import Footer from './Footer'
import Home from '../pages/Home'
import Weather from '../pages/Weather'
import Favorites from '../pages/Favorites'
import NotFound from '../pages/NotFound'
import '../styles/style.css'

const App = () => {
  return(
   <div>
      <Router>
        <Nav />
          <Switch>
              <Route exact  path="/" component={Home} />
              <Route exact  path="/weather" component={Weather}/>
              <Route exact  path="/favorites" component={Favorites} />
              <Route  component={NotFound} />

          </Switch>
      </Router>
      <Footer/>
    </div> 
  )
}

export default App;

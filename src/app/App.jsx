import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import './App.less';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../pages/Home.jsx';
import Recipes from '../pages/Recipes.jsx';
import SingleRecipe from '../pages/SingleRecipe.jsx';
import Default from '../pages/Default.jsx';
import Navbar from '../components/Navbar.jsx';

function App() {
  return (
      <Router>
          <main>
              {/* navbar */}
              <Navbar/>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/recipes" exact component={Recipes}/>
                  <Route path="/recipes/:id" component={SingleRecipe}/>
                  <Route component={Default}/>
              </Switch>
          </main>
      </Router>
  );
}

export default App;

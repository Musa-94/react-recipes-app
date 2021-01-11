import React, { Suspense } from 'react';
import {
    Route,
    Switch,
    HashRouter as Router,
} from 'react-router-dom';
import './App.less';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../pages/Home.jsx';
import Recipes from '../pages/Recipes.jsx';
import Navbar from '../components/Navbar.jsx';
import Default from '../pages/Default.jsx';
import Recipe from '../pages/Recipe.jsx';

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Download...</div>}>
                <main>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipes" exact component={Recipes}/>
                        <Route path="/recipes/:id" component={Recipe}/>
                        <Route component={Default}/>
                    </Switch>
                </main>
            </Suspense>
      </Router>
  );
}

export default App;

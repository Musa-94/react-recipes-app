import React, { Suspense } from 'react';
import {
    Route,
    Switch,
    HashRouter as Router,
} from 'react-router-dom';
import './App.less';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../pages/Home/Home.jsx';
import Recipes from '../pages/Recipes/Recipes.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Default from '../pages/Default/Default.jsx';
import Recipe from '../pages/Recipes/components/Recipe/Recipe.jsx';

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

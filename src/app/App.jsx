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
import SingleRecipe from '../pages/SingleRecipe.jsx';

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Download...</div>}>
                <main>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipes" exact component={Recipes}/>
                        <Route path="/recipes/:id" component={SingleRecipe}/>
                        <Route component={Default}/>
                    </Switch>
                </main>
            </Suspense>
      </Router>
  );
}

export default App;

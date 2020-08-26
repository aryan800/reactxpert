import React from 'react';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';


// Website
import { home } from './components/website/home';
import { About } from './components/website/about';
import { Courses } from './components/website/courses';
import { Services } from './components/website/services';
import { Gallery } from './components/website/gallery';
import { Verification } from './components/website/verification';

// Admin
import { Dashboard } from './components/admin/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          {/* Website */}
          <Route exact path='/' component={home} />
          <Route path='/about' component={About} />
          <Route path='/courses' component={Courses} />
          <Route path='/services' component={Services} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/verification' component={Verification} />

          {/* Admin Panel */}
          <Route path='/dashboard' component={Dashboard} />
          
          {/* <Route path='/signup' component={Register} />
          <Route path='/product-details/:id' component={ProductDetails} />
          <Route path='/product-category/:ctype/:cid' component={ProductCategories} /> */}

      </Switch>
      </Router>
    </div>
  );
}

export default App;

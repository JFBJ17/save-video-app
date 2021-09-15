import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Layout from './Layout';
import Links from '../pages/Links';
import AddLink from '../pages/AddLink';
import Profile from '../pages/Profile';
import UpdateLink from '../pages/UpdateLink';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/links/add" component={AddLink} />
          <Route exact path="/links/edit/:id" component={UpdateLink} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

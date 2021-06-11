import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer.js';
import AboutComponent from './components/About.js';
import Home from './components/Home.js';

export default function App() {
  return (
    <Drawer>
      <Switch>
        <Route path='/about' component={AboutComponent} />
        <Route path='/' component={Home} />
      </Switch>
    </Drawer>
  );
};


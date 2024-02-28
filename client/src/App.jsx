import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import LandingPage from '../src/components/Landingpage/landingpage';
import About from './components/About/About.jsx';
import Home from './components/Homepage/homepage.jsx'
import Form from './components/Formpage/formpage.jsx';
import './App.css';
import Detail from './components/Detailpage/detailpage.jsx';

function App() {
  return (
    <div>
    <Router>
      <Switch>
            <Route exact path="/" render={()=><LandingPage />} 
            />
            <Route exact path="/about" render={()=><About/>}
            />
            <Route exact path="/home" render={()=><Home />} 
            />
            <Route exact path="/create" render={()=><Form />} 
            />
            <Route exact path="/pokemons/:id" render={()=><Detail />} 
            />
      </Switch>
      </Router>
    </div>
  );
}

export default App;

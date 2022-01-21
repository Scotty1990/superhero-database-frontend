import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Heroes from './components/Heroes';
import Villains from './components/Villains';
import SuperHeroDetails from './components/SuperHeroDetails';
import SuperVillainDetails from './components/SuperVillainDetails';
import HomePage from './components/HomePage';

function App() {
  // const [heroes, setHeroes] = useState([])
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Route exact path='/' component={HomePage} />
      <Route exact path="/heroes" component={Heroes} />
      <Route exact path="/villains" component={Villains} />
      <Route
        path="/superheroes/:id"
        render={(routerProps) => <SuperHeroDetails match={routerProps.match} />}
      />
      <Route
        path="/supervillains/:id"
        render={(routerProps) => <SuperVillainDetails match={routerProps.match} />}
      />
    </div>
  );
}

export default App;

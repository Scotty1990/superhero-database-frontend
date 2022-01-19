import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Heroes from './components/Heroes';
import Villains from './components/Villains';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Route exact path="/heroes" component={Heroes} />
      <Route exact path="/villains" component={Villains} />
    </div>
  );
}

export default App;

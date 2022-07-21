import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPlayers from './components/AllPlayers/AllPlayers';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllPlayers></AllPlayers>
    </div>
  );
}

export default App;

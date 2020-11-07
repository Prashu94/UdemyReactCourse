import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Person App</h1>
      <Person name = "Prashant" age = {26}/>
      <Person name = "Deval" age = {26}/>
      <Person name = "Swapnil" age = {27}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  fetch('https://sigma.herokuapp.com/')
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
    <div className="App">
app
    </div>
  );
}

export default App;

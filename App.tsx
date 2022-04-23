import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { Greet } from './components/Greet';
import { Name } from './components/Name';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='Vishu Kalier' num={10} loggedIn={true}/>
        <Name first_name='Vishu' last_name='Kalier' />
        </header>
    </div>
  );
}

export default App;

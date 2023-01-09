
import './App.css';
import Greeting from './components/Greeting/Greeting'
import AppName from './components/AppName/AppName';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Greeting/>
      <AppName/>
    </div>

  );
}


export default App;

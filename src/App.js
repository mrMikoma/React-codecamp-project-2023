
import './App.css';
import NordPoolChart from './components/NordPoolChart';
import TestHeader from './components/TestHeader';


function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <TestHeader text="Hey"/>
      <div>
        <NordPoolChart />
      </div>
    </div>

  );
}


export default App;

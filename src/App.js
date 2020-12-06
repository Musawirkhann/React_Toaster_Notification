import logo from './logo.svg';
import './App.css';
import NavbarScreen from './screens/NavbarScreen';
import ToasterScreen from './screens/ToasterScreen';

function App() {
  return (
    <div className="App">
      <NavbarScreen/>
      <ToasterScreen/>
    </div>
  );
}

export default App;

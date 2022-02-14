import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';



function App() {

  return (
    <div className="container">
      <Navbar title="WORKER APP" />
      <User />
      <User />
      <User />

    </div>
  );
}

export default App;

import './App.css';
import HeaderNav from './components/header';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <HeaderNav />
    </Router>
  );
}

export default App;

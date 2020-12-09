import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import MainRoutes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Menu />
        <MainRoutes />
      </div>
    </Router>
  );
}

export default App;
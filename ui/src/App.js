import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import MainRoutes from './routes';

function App() {
  return (
    <Router>
      <Menu />
      <MainRoutes />
    </Router>
  );
}

export default App;
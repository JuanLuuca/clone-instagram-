import './App.css';
import { PublicRoutes } from '../src/Routes/PublicRoutes';
import { PrivateRoutes } from '../src/Routes/PrivateRoutes';

function App() {
  const getToken = localStorage.getItem('key')

  return getToken ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;

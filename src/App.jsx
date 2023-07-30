
import './App.scss';
import Layout from '../src/components/Layout/Layout'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Layout />} />
  </Routes>  
  </> 
  );
}

export default App;

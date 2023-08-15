
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} /> 
      </Routes>
    </Layout>
  );
}
export default App;

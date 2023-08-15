
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} /> 
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      
    </Layout>
  );
}
export default App;

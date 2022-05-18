// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Calendar from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Plants from './components/Plants';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Calendar />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Plants />} />
        <Route path="/" element={<Nav />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Activity from './pages/Actividad';
import Myprofile from './pages/Myprofile';
import Hotitworks from './pages/Hotitworks';
import { Header } from './components/header';
import Create from './pages/create';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividad" element={<Activity />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/hotitworks" element={<Hotitworks />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

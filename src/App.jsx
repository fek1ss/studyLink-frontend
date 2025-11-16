import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ReactGA from 'react-ga4';
import GetFile from './pages/GetFile/GetFile';
import Loading from './components/Loading/Loading';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

ReactGA.initialize('G-ZR5Q94F5P0');
ReactGA.send('pageview');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate" element={<GetFile />} />
        <Route path="/skeleton" element={<Loading />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

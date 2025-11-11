import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ReactGA from "react-ga4";
import TestGenerate from './components/TestGenerate/TestGenerate';
import GetFile1 from './components/GetFile/GetFile1';
import Loading from './components/Loading/Loading';

ReactGA.initialize("G-ZR5Q94F5P0");
ReactGA.send("pageview");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/test' element={<TestGenerate />} />
        <Route path='/generate' element={<GetFile1 />} />
        <Route path='/skeleton' element={<Loading />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ReactGA from "react-ga4";
import TestGenerate from './components/TestGenerate/TestGenerate';
import GetFile from './components/GetFile/GetFile';
import Loading from './components/Loading/Loading';

ReactGA.initialize("G-ZR5Q94F5P0");
ReactGA.send("pageview");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/test' element={<TestGenerate />} />
        <Route path='/generate' element={<GetFile />} />
        <Route path='/skeleton' element={<Loading />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

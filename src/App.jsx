import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ReactGA from "react-ga4";

ReactGA.initialize("G-ZR5Q94F5P0");
ReactGA.send("pageview");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

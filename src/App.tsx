import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SaltumWebsite from './saltum-tech-website';
import GetStarted from './GetStarted';
import LearnMore from './LearnMore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SaltumWebsite />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
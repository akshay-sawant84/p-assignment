import { Routes, Route } from 'react-router-dom';
import Home from './page-components/Home';
import Login from './page-components/Login';
import Signup from './page-components/Singup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

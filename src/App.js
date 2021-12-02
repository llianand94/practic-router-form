
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingInPage from './pages/SingInPage';
import SingUpPage from './pages/SingUpPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/sing-in' element={<SingInPage/>}/>
        <Route path='/sing-up' element={<SingUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

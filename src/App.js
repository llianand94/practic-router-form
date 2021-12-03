
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SingInPage from './pages/SingInPage';
import SingUpPage from './pages/SingUpPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>     
      <Routes>
        <Route path='/' element={<p>Hello it's the main page</p>}/>
        <Route path='/singin' element={<SingInPage/>}/>
        <Route path='/singup' element={<SingUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

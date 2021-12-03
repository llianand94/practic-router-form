
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SingInPage from './pages/SingInPage';
import SingUpPage from './pages/SingUpPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>     
      <Routes>
        <Route path='/' element={<div className={styles.mainPageContainer}>
          <p>Hello it's the main page</p>
          </div>}/>
        <Route path='/singin' element={<SingInPage/>}/>
        <Route path='/singup' element={<SingUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const MainPage = () => {
  return (
  <>  
      <Header>
      {<Link to="/sing-in">Sing IN page</Link>}
      </Header>
      <p>Hello it's the main page</p>
      </>
  );
}

export default MainPage;

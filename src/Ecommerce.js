import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/components/Navbar';
import Content from './pages/components/Content';
import Container from '@material-ui/core/Container';

const Ecommerce = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <header>
        <Navbar />
      </header>
      {/* <Container> */}
      <div>
        <Content />
      </div>
      {/* </Container> */}
      <footer></footer>
    </div>
  );
}

export default Ecommerce;

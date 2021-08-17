import React from 'react';
import './App.css';
import Navbar from './pages/resume/components/Navbar';
import Profile from './pages/resume/components/Profile';
import Experience from './pages/resume/components/Experience';
import classnames from 'classnames';

const Resume = () => {
  return (
    <div 
    className={classnames('w-full', 'h-screen')}
    style={{backgroundColor: 'white'}}>
      <header>
        <Navbar />
      </header>
      {/* <Container> */}
      <div className={classnames('w-full', 'mt-24')}>
        <Profile />
        <Experience />
      </div>
      {/* </Container> */}
      <footer></footer>
    </div>
  );
}

export default Resume;

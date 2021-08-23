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
        <div className={classnames('w-full', 'h-20')} id='experience'></div>
          <div className={classnames('w-full', 'pt-8')}
              style={{paddingLeft: '16.6rem'}}
          >
              <h2 className={classnames('text-2xl', 'text-bold')}>Experience</h2>
          </div>
          <Experience />
        </div>
      {/* </Container> */}
      <footer></footer>
    </div>
  );
}

export default Resume;

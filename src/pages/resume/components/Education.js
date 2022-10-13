import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import '../../../Custom.css';
import profile from '../static/profile_1.jpg'
import rice_bg from '../static/rice.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


const FadeInLeft = ({
  children,
}) => {
  const domRef = React.useRef();
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (<section ref={ domRef } className={ isVisible ? ' boxLeft' : '' }>{ children }</section>);
};

const FadeInRight = ({
  children,
}) => {
  const domRef = React.useRef();
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (<section ref={ domRef } className={ isVisible ? ' boxRight' : '' }>{ children }</section>);
};


function useIntersection(options) {
    const [observerEntry, setEntry] = useState({});
    const elRef = useRef();

    useEffect(
      () => {
        const observer = new IntersectionObserver(
          entries => setEntry(entries[0]),
          options
        );
        observer.observe(elRef.current);
        return () => observer.disconnect();
      },
      [elRef]
    );
    return { observerEntry, elRef };
  }

  function BoxLeft({ id, children }) {
    const { observerEntry, elRef } = useIntersection({ threshold: 1 });

    return (
      <div
        id={id}
        ref={elRef}
        data-visible={observerEntry.isIntersecting}
        className="boxLeft"
      >
        {children}
      </div>
    );
  }

  function BoxRight({ id, children }) {
    const { observerEntry, elRef } = useIntersection({ threshold: 1 });

    return (
      <div
        id={id}
        ref={elRef}
        data-visible={observerEntry.isIntersecting}
        className="boxRight"
      >
        {children}
      </div>
    );
  }

const Education = () => {

    return (
        <div className={classnames('mt-8')} id='education'>
      <div className={classnames('w-full')}>
        {/* <div className={classnames('w-full', 'py-10')}
            style={{paddingLeft: '16.8rem'}}
        >
            <h2 className={classnames('text-2xl', 'text-bold')}>Experience</h2>
        </div> */}
        {/* Lucid */}
        <div className={classnames('w-full', 'h-0.5', 'bg-gray-200')}></div>

            <div className={classnames('w-full', 'flex', 'justify-center', 'py-10')}>
                <FadeInLeft id="box-1">
                <div className={classnames('text-left-fade-in')}>
                    <div className={classnames('w-56')}>
                        <p>Aug. 2021 - Dec. 2022</p>
                        {/* <p className={classnames('text-xl', 'text-bold', 'pb-2')}>Master of Computer Science</p> */}
                    </div>
                </div>
                </FadeInLeft>
                <div className={classnames('pl-10', 'pr-12')}>
                    <div className={classnames('w-1', 'bg-gray-200')}>
                        <div className={classnames('w-1', 'bg-black', 'h-1', 'rounded')}></div>
                    </div>
                    <div className={classnames('h-full', 'w-1', 'bg-gray-200')}></div>
                </div>
                <FadeInRight id="box-1">
                <div className={classnames('text-right-fade-in')}
                    style={{width: '38rem'}}
                >
                    <h2 className={classnames('text-3xl', 'text-bold', 'pb-2')}>Rice University
                      <p className={classnames('text-xl', 'text-bold', 'pb-2')}>Master of Computer Science</p>
                    </h2>
                </div>
                </FadeInRight>
            </div>
            {/* Garmin */}
            <div className={classnames('w-full', 'flex', 'justify-center', 'py-10')}>
                <FadeInLeft id="box-2">
                    <div className={classnames('text-left-fade-in')}>
                        <div className={classnames('w-56')}>
                            <p>Sep. 2014 - Jul. 2017</p>
                        </div>
                    </div>
                </FadeInLeft>
                <div className={classnames('pl-10', 'pr-12')}>
                    <div className={classnames('w-1', 'bg-gray-200')}>
                        <div className={classnames('w-1', 'bg-black', 'h-1', 'rounded')}></div>
                    </div>
                    <div className={classnames('h-full', 'w-1', 'bg-gray-200')}></div>
                </div>
                <FadeInRight id="box-1">
                    <div className={classnames('text-right-fade-in')}>
                        <div className={classnames('text-right-fade-in')}
                            style={{width: '38rem'}}
                        >
                            <h2 className={classnames('text-3xl', 'text-bold', 'pb-4')}>National Central University
                              <p className={classnames('text-xl', 'text-bold', 'pb-2')}>M.B.A in Information Management</p>
                            </h2>                            
                        </div>
                    </div>
                </FadeInRight>
            </div>
            {/* FRNCi */}
            <div className={classnames('w-full', 'flex', 'justify-center', 'py-10')}>
                <FadeInLeft id="box-2">
                    <div className={classnames('text-left-fade-in')}>
                        <div className={classnames('w-56')}>
                            <p>Sep. 2010 - Jun. 2014</p>
                            {/* <p className={classnames('text-xl', 'text-bold', 'pb-2')}>B.A in Information Management</p> */}
                        </div>
                    </div>
                </FadeInLeft>
                <div className={classnames('pl-10', 'pr-12')}>
                    <div className={classnames('w-1', 'bg-gray-200')}>
                        <div className={classnames('w-1', 'bg-black', 'h-1', 'rounded')}></div>
                    </div>
                    <div className={classnames('h-full', 'w-1', 'bg-gray-200')}></div>
                </div>
                <FadeInRight id="box-1">
                    <div className={classnames('text-right-fade-in')}>
                        <div className={classnames('text-right-fade-in')}
                            style={{width: '38rem'}}
                        >
                            <h2 className={classnames('text-3xl', 'text-bold', 'pb-2')}>National Dong Hwa University 
                              <p className={classnames('text-xl', 'text-bold', 'pb-2')}>B.A in Information Management</p>
                            </h2>
                        </div>
                    </div>
                </FadeInRight>
            </div>

        {/* </Box> */}
      </div>
      </div>
    );
  }

export default Education;

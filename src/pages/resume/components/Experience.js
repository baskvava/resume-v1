import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import '../../../Custom.css';
import profile from '../static/profile_1.jpg'
import rice_bg from '../static/rice.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


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

const Experience = () => {

    return (
        <div className={classnames('mt-8')} id='experience'>
      <div className={classnames('w-full')}>
        {/* <div className={classnames('w-full', 'py-10')}
            style={{paddingLeft: '16.8rem'}}
        >
            <h2 className={classnames('text-2xl', 'text-bold')}>Experience</h2>
        </div> */}
        {/* Lucid */}
        <div className={classnames('w-full', 'h-0.5', 'bg-gray-200')}></div>

            <div className={classnames('w-full', 'flex', 'justify-center', 'py-10')}>
                <BoxLeft id="box-1">
                <div className={classnames('text-left-fade-in')}>
                    <div className={classnames('w-56')}>
                        <p>Dec. 2020 - Jul. 2021</p>
                        <p className={classnames('text-xl', 'text-bold', 'pb-2')}>Senior Frontend Software</p>
                    </div>
                </div>
                </BoxLeft>
                <div className={classnames('pl-10', 'pr-12')}>
                    <div className={classnames('w-1', 'bg-gray-200')}>
                        <div className={classnames('w-1', 'bg-black', 'h-1', 'rounded')}></div>
                    </div>
                    <div className={classnames('h-full', 'w-1', 'bg-gray-200')}></div>
                </div>
                <BoxRight id="box-1">
                <div className={classnames('text-right-fade-in')}
                    style={{width: '38rem'}}
                >
                    <h2 className={classnames('text-3xl', 'text-bold', 'pb-2')}>Lucid</h2>
                    <p className={classnames('text-sm', 'text-gray-700', 'pb-4')}>A platform that enables enterprises to build AI applications without having to know how to build AI</p>
                    <div>
                    • Improved user experience by supporting http live streaming (hls), user can autoplay previews (hls) when
                    hover and dragging segments (hls) trained from AI model for e-commerce (React.js)
                    </div>
                    <div>
                    • Earned totally over $1000/month income of three company contracts by building three mockups
                    responsive websites and five MVP features on website in six months (React.js)
                    </div>
                    <div>
                    • Reduced 100% time of manual user account creations by integrating 3 types auth flow in one week with
                    Firebase - Password Authentication & Email Verification, Phone Number, Google Sign-in
                    </div>
                </div>
                </BoxRight>
            </div>
            {/* Garmin */}
            <div className={classnames('w-full', 'flex', 'justify-center', 'py-10')}>
                <BoxLeft id="box-2">
                    <div className={classnames('text-left-fade-in')}>
                        <div className={classnames('w-56')}>
                            <p>Aug. 2017 - Aug. 2019</p>
                            <p className={classnames('text-xl', 'text-bold', 'pb-2')}>Engineer Staff II</p>
                        </div>
                    </div>
                </BoxLeft>
                <div className={classnames('pl-10', 'pr-12')}>
                    <div className={classnames('w-1', 'bg-gray-200')}>
                        <div className={classnames('w-1', 'bg-black', 'h-1', 'rounded')}></div>
                    </div>
                    <div className={classnames('h-full', 'w-1', 'bg-gray-200')}></div>
                </div>
                <BoxRight id="box-1">
                    <div className={classnames('text-right-fade-in')}>
                        <div className={classnames('text-right-fade-in')}
                            style={{width: '38rem'}}
                        >
                            <h2 className={classnames('text-3xl', 'text-bold', 'pb-4')}>Garmin International</h2>
                            <p className={classnames('text-1xl', 'text-bold', 'text-gray-800', 'pb-2')}>Baidu Map with Leaflet Layer (Frontend)</p>
                            <div>
                                • Refactored code to reduce 90 % maintenance time. Translated three types of coordinates WGS84, GCJ02,
                                and BD09 from activity routes record of device to display on the Baidu map
                            </div>
                            <div>
                                • Provided more than 1 million users to access their activity routes on the website
                            </div>
                            <p className={classnames('text-base', 'text-bold', 'text-gray-800', 'pt-4', 'pb-2')}>Super Set (Backend)</p>
                            <div>
                            • Provided a big data visualization platform for marketing to trace parallel goods by multiple dimensions
                            </div>
                            <div>
                            • Migrated 14 Asia countries historical data over 700 million records only in 5 hours from MSSQL to MySQL
                            </div>
                            <div>
                            • Reduced 100% time of manual migration time by building daily synchronization cron jobs to migrate daily
                            updating data of users’ activity data from 14 Asia countries (Java, Spring Boot, MySQL)
                            </div>
                        </div>
                    </div>
                </BoxRight>
            </div>
            {/* FRNCi */}
            <div className={classnames('w-full', 'flex', 'justify-center', 'py-10')}>
                <BoxLeft id="box-2">
                    <div className={classnames('text-left-fade-in')}>
                        <div className={classnames('w-56')}>
                            <p>Aug. 2015 - Aug. 2016</p>
                            <p className={classnames('text-xl', 'text-bold', 'pb-2')}>Co-founder & Software Engineer</p>
                        </div>
                    </div>
                </BoxLeft>
                <div className={classnames('pl-10', 'pr-12')}>
                    <div className={classnames('w-1', 'bg-gray-200')}>
                        <div className={classnames('w-1', 'bg-black', 'h-1', 'rounded')}></div>
                    </div>
                    <div className={classnames('h-full', 'w-1', 'bg-gray-200')}></div>
                </div>
                <BoxRight id="box-1">
                    <div className={classnames('text-right-fade-in')}>
                        <div className={classnames('text-right-fade-in')}
                            style={{width: '38rem'}}
                        >
                            <h2 className={classnames('text-3xl', 'text-bold', 'pb-2')}>FRNCi</h2>
                            <p className={classnames('text-sm', 'text-gray-700', 'pb-4')}>
                                A social travel platform that connects travelers with locals who share common interests and lifestyle
                            </p>
                            <div>
                            • Built everything from scratch and earned 7000+ registered members from 45 countries and successfully matched more than 1500 members worldwide.
                            </div>
                            <div>
                            • Designed the whole system and architecture of frontend, backend, and database to solve the business need (PHP, MySQL, Bootstrap.js, AWS)
                            </div>
                        </div>
                    </div>
                </BoxRight>
            </div>

        {/* </Box> */}
      </div>
      </div>
    );
  }

export default Experience;

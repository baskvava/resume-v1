import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import '../../../Custom.css';
import profile from '../static/profile_1.jpg'
import rice_bg from '../static/rice.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Profile = () => {


    return (
    <div className={classnames('w-full')}>
      <div className={classnames('w-full', 'bg-cover', 'flex', 'justify-center')}
        style={{height: '40rem',
            backgroundColor: 'rgba(242, 133, 0, .6)',
            backgroundBlendMode: 'multiply',
            backgroundImage: `url(${rice_bg})`
        }}
      >
        {/* <div className={classnames('w-full')}> */}
            <div className={classnames('box-left', 'flex', 'items-end')}>
            {/* <p className={classnames('text')}>CCCCCCC</p> */}
                <div className={classnames('bg-gray-50', 'w-full', 'h-5/6', 'flex', 'items-end')}>
                    <img alt="profile" className={classnames('gray')} src={`${profile}`} />
                </div>
            </div>
            <div className={classnames('box-right', 'flex', 'items-end')}>
                <div className={classnames('flex', 'items-center', 'bg-gray-100', 'w-full', 'h-5/6', 'px-16')}>
                    <ul>
                        <li className={classnames('font-bold', 'text-3xl', 'pb-6')}>Ying-Hsuan Chen</li>
                        <li className={classnames('text-base', 'py-3')}>
                            <div>Phone: </div>
                            <div>346 404 5275</div>
                        </li>
                        <li className={classnames('text-base', 'py-3')}>
                            <div>Email: </div>
                            <div>yc144@rice.edu</div>
                        </li>
                        <li className={classnames('text-base', 'py-3')}>
                            <div>Address: </div>
                            <div>2410 Shakespeare St. Apt.
                                    Houston, TX 77030
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <img alt="profile" src={`${profile}`} /> */}
            </div>
        {/* </div> */}
        </div>
        <div
            className={classnames('w-full', 'flex', 'justify-center')}
        >
            <ul
                className={classnames('bottom-up',
                    'w-full', 'flex', 'justify-center', 'items-center', 'h-16', 'bg-gray-900')}
                style={{width: '800px', backgroundColor: '#CD853F'}}
            >
                <l1 className={classnames('p-5')}>
                    <GitHubIcon fontSize="medium" style={{ color: 'white', fontSize: 30 }} />
                </l1>
                <li className={classnames('p-5')}>
                    <LinkedInIcon fontSize="medium" style={{ color: 'white', fontSize: 32 }} />
                </li>
                <li className={classnames('p-5')}>
                    <FacebookIcon fontSize="medium" style={{ color: 'white', fontSize: 32 }} />
                </li>
            </ul>
        </div>
      </div>
    );
  }

export default Profile;

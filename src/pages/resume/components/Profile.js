import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import '../../../Custom.css';
import profile from '../static/profile_1.jpg'
import rice_bg from '../static/rice.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


  const getModalStyle = () => {
    const top = 50 ;
    const left = 50 ;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const Profile = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2>Contact Me</h2>
            <ul>
                <li className={classnames('flex', 'justify-center')}>
                    <div>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                </li>
                <li>
                    <label>Email Name</label>
                    <input type="email" />
                </li>
                <li>
                    <label>Message</label>
                    <input type="textarea" />
                </li>
            </ul>
        </div>
      );

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
                    <img alt="profile" src={`${profile}`} />
                </div>
            </div>
            <div className={classnames('box-right', 'flex', 'items-end')}>
                <div className={classnames('flex', 'items-center', 'bg-gray-100', 'w-full', 'h-5/6', 'px-16', 'pt-28')}>
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
                        <li className={classnames('text-base', 'pt-3')}>
                            <div>Address: </div>
                            <div>2410 Shakespeare St. Apt.
                                    Houston, TX 77030
                            </div>
                        </li>
                        <li
                            className={classnames('flex', 'justify-center', 'mt-12')}
                        >
                            <div className={classnames('p-5')}>
                                <GitHubIcon fontSize="medium" style={{ color: 'black', fontSize: 30 }} />
                            </div>
                            <div className={classnames('p-5')}>
                                <LinkedInIcon fontSize="medium" style={{ color: 'black', fontSize: 32 }} />
                            </div>
                            <div className={classnames('p-5')}>
                                <FacebookIcon fontSize="medium" style={{ color: 'black', fontSize: 32 }} />
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
            <button type='button' onClick={handleOpen}>
                <div className={classnames('bottom-up',
                    'w-full', 'flex', 'justify-center', 'items-center', 'h-16', 'bg-gray-900')}
                style={{width: '800px', backgroundColor: '#CD853F'}}>
                    <p className={classnames('text-bold', 'text-4xl', 'text-white', 'font-sans', 'tracking-widest')}>
                        HIRE ME
                    </p>
                </div>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
        {/* <div
            className={classnames('w-full', 'flex', 'justify-center', '-mt-16')}
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
        </div> */}
      </div>
    );
  }

export default Profile;

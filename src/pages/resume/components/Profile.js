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
import TextField from '@material-ui/core/TextField';


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
      width: 680,
      height: 600,
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
            <h2 className={classnames('w-full', 'flex', 'justify-center', 'text-2xl', 'text-gray-800', 'tracking-widest', 'pt-4', 'pb-6')}>CONTACT ME</h2>
            <ul className={classnames('w-full')}>
                <li className={classnames('w-full', 'flex', 'justify-center', 'items-center', 'h-20', 'pr-3')}>
                    <div className={classnames('w-1/2')}>
                        <label>First Name</label>
                        <div>
                            <TextField variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <div>
                            <TextField variant="outlined" />
                        </div>
                    </div>
                </li>
                <li className={classnames('w-full', 'h-12', 'mx-14', 'mt-6')}>
                    <label className={classnames('my-2')}>Email</label>
                    <div>
                        <TextField variant="outlined" className={classnames('w-4/5')} />
                    </div>
                </li>
                <li className={classnames('w-full', 'h-48', 'mx-14', 'mt-12')}>
                    <label className={classnames('my-2')}>Message</label>
                    <div className={classnames('w-full', 'my-2')}>
                        <TextField
                            className={classnames('w-4/5')}
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant="outlined" />
                    </div>
                </li>
            </ul>
            <div className={classnames('w-full', 'flex', 'justify-center', 'text-2xl', 'text-gray-800', 'tracking-widest', 'pt-4', 'pb-6')}>
                <button
                    className={classnames('border', 'border-gray-400', 'rounded', 'px-4', 'py-2', 'text-white')}
                    style={{backgroundColor: '#CD853F'}}>Submit</button>
            </div>
        </div>
      );

    return (
    <div className={classnames('w-full', 'pb-6')}>
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
                                <a href="https://github.com/baskvava"  rel="noreferrer" target="_blank">
                                    <GitHubIcon fontSize="medium" style={{ color: 'black', fontSize: 30 }} />
                                </a>
                            </div>
                            <div className={classnames('p-5')}>
                                <a href="https://www.linkedin.com/in/ying-hsuan-chen1/" rel="noreferrer" target="_blank">
                                    <LinkedInIcon fontSize="medium" style={{ color: 'black', fontSize: 32 }} />
                                </a>
                            </div>
                            <div className={classnames('p-5')}>
                                <a href="https://www.facebook.com/profile.php?id=100000179000387" rel="noreferrer" target="_blank">
                                    <FacebookIcon fontSize="medium" style={{ color: 'black', fontSize: 32 }} />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <img alt="profile" src={`${profile}`} /> */}
            </div>
        {/* </div> */}
        </div>
        {/* <div
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
        </div> */}
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

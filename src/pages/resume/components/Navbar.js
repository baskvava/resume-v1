import React from 'react';
import classnames from 'classnames';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    return (
        <div className={classnames('w-full', 'fixed', 'top-0', 'bg-gray-100', 'h-24', 'px-10', 'flex', 'z-50')}>
            <div className={classnames('relative', 'w-full', 'flex', 'items-center')}>
                {/* <div className={classnames('flex', 'justify-start')}> */}
                <div className={classnames('absolute', 'left-0')}>
                    <HashLink smooth to="#main">
                        <p className={classnames('text-3xl', 'font-bold')}>Ying-Hsuan Chen</p>
                    </HashLink>
                </div>
                <ul className={classnames('absolute', 'flex',  'right-0', 'justify-end', 'text-base', 'uppercase')}>
                    <li className={classnames('px-4')}>
                        <HashLink smooth to="#experience">Experience</HashLink>
                    </li>
                    <li className={classnames('px-4')}>
                        <HashLink smooth to="#education">Education</HashLink>
                    </li>
                    <li className={classnames('px-4')} style={{cursor: 'not-allowed'}}>Skills</li>
                    <li className={classnames('px-4')} style={{cursor: 'not-allowed'}}>Expertise</li>
                    <li className={classnames('pl-4')} style={{cursor: 'not-allowed'}}>Contact</li>
                </ul>
                {/* <div className={classnames('absolute', 'right-0', 'flex')}>
                    <div>Experience</div>
                    <div>Education<div>
                    <div>Clients</div>
                    <div>Skills</div>
                    <div>Expertise</div>
                    <div>Contact</div>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;
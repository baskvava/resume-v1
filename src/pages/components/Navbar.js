import React from 'react';
import classnames from 'classnames';
import Select from 'react-dropdown-select';
import logo from '../static/navbar/logo.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Navbar = () => {

    return (
        <div className={classnames('w-full', 'fixed', 'top-0', 'flex', 'items-center', 'bg-yellow-600')}
            // style={{height: '3.625rem', backgroundColor: '#e28743'}}
            style={{height: '3.625rem'}}
        >
            {/* logo */}
            <div>
                <img alt="logo" src={logo}
                className={classnames('px-1')}
                    style={{width: '7rem'}}
                />
            </div>
            {/* location */}
            <div
                className={classnames('text-white', 'flex', 'items-center', 'px-1')}
                style={{width: '5rem'}}
            >
                <div>
                    <LocationOnIcon />
                </div>
                <div className={classnames('text-xs')}>
                    <div><span>交貨到</span></div>
                    <div><span>台灣</span></div>
                </div>
            </div>
            {/* Search bar */}
            <div className={classnames('flex', 'px-4')}
                style={{width: '65%'}}
            >
                <Select
                    className={classnames('text-xs')}
                    style={{backgroundColor: '#f1f1f4'}}
                    // options={options}
                    values={[]}
                    onChange={(value) => console.log(value)}
                    placeholder='全部 '
                />
                <input type="text" className={classnames('w-full')}/>
                <button type="button" className={classnames('w-12', 'bg-yellow-700', 'rounded-r')}>
                    <SearchIcon />
                </button>
            </div>
            <div className={classnames('text-white', 'w-8', 'p-1')}>
                <FlagIcon />
            </div>
            <div className={classnames('text-xs', 'text-white', 'w-20')}>
                <div>您好，登入</div>
                <div>帳戶與清單</div>
            </div>
            <div className={classnames('text-xs', 'text-white', 'w-12')}>
                <div>退貨</div>
                <div>與訂單</div>
            </div>
            <div className={classnames('flex', 'text-white', 'w-20')}>
                <AddShoppingCartIcon />
                <div>購物車</div>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import styles from './Navbar.module.scss';
import {Icon} from '@iconify/react';

const Navbar = () => {
    return (
        <nav className={styles.secondaryNav} aria-label="secondary">
            <div className="content-wrapper">
                <div className="menu">
                    <ul>
                        <li className="active">Clients</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

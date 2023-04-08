import React from 'react';
import styles from './Navbar.module.scss';
import {Icon} from '@iconify/react';
import Link from "next/link";
import Search from "@/components/navbar/search";
import {LOGOUT} from "@/commons/router";

const Navbar = () => {
    return (
        <nav className={styles.primaryNav} aria-label="primary">
            <div className="content-wrapper">
                <div className="left">
                    <div className="logo">
                        <Link href="/clients"><img src="https://flalingo.com/cdn-cgi/image/f=auto,width=550,quality=90/img/new_home/responsive_img/logo_withouth_motto_w_1400.webp"/></Link>
                    </div>
                    <Search/>
                </div>
                <div className="right">
                    <div className="menu">
                        <ul>
                            <li className="left-icon"><Icon icon="ic:round-plus"/> Add Product</li>
                            <li>Support <Icon icon="material-symbols:arrow-drop-down-sharp"/></li>
                            <li><Link href={LOGOUT}>Logout</Link></li>
                        </ul>
                    </div>
                    <div className="profile">
                        <div className="avatar"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/></div>
                        <div className="name">Engin</div>
                        <Icon icon="material-symbols:arrow-drop-down-sharp"/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    // const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header id="site-header" className="site-header header-absolute">
            <div className='tablenetheader'>
                <div className="header-topbar navbar elements-2">
                    <div className="container-fluid">
                        <ul className="nav topbar-ul element-left right-element-exist"></ul>
                        <ul className="nav topbar-ul pull-right justify-content-end right-element-exist">
                            <li><i className="bi bi-clock theme-color mr-2"></i> Mon – Sun: 9.00 am – 7.00pm</li>
                            <li><a href="mailto:save@millstreetenergy.com" className="email-link" target="_self"><span
                                className="bi bi-envelope theme-color me-2"></span>save@millstreetenergy.com</a></li>
                            <li>
                                <address><span className="bi bi-geo-alt theme-color me-1"></span>Mill Street Energy proudly
                                    serves businesses across the United States.</address>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sticky-outer" data-stickyup="0">
                    <div className="sticky-head">
                        <div className="header-navbar navbar elements-3">
                            <div className="container-fluid">
                                <ul className="nav navbar-ul element-left right-element-exist">
                                    <li className="header-titles-wrapper">
                                        <div className="header-titles">
                                            <h1 className="site-logo"><a href="https://www.millstreetenergy.com/"
                                                className="default-logo test"><img
                                                    src="/Mill-Street-Energy-Logo-Black-Text.png"
                                                    alt="Mill Street Energy (MSE)" /></a><span
                                                        className="screen-reader-text">Mill Street Energy (MSE)</span></h1>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="nav navbar-ul pull-center justify-content-center right-element-exist">
                                    <li className="header-navigation-wrapper">
                                        <nav className="primary-menu-wrapper" aria-label="Horizontal">
                                            <ul className="nav wp-menu primary-menu">
                                                <li id="menu-item-77693"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-76934 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-77693">
                                                    <a href="https://www.millstreetenergy.com/" aria-current="page">Home</a>
                                                    {/* <ul className="sub-menu">
                                                        <li id="menu-item-77694"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-76934 current_page_item menu-item-77694">
                                                            <a href="https://www.millstreetenergy.com/"
                                                                aria-current="page">Home Default</a></li>
                                                        <li id="menu-item-77698"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77698">
                                                            <a href="https://www.millstreetenergy.com/?page_id=76937">Home
                                                                4</a></li>
                                                    </ul> */}
                                                </li>
                                                <li id="menu-item-77639"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-77639">
                                                    <a href="#">About</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-77700"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77700">
                                                            <a href="https://www.millstreetenergy.com/?page_id=76828">WHAT WE DO</a></li>
                                                        <li id="menu-item-77701"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77701">
                                                            <a href="https://www.millstreetenergy.com/?page_id=76983">LEADERSHIP</a></li>
                                                        <li id="menu-item-77640"
                                                            className="menu-item menu-item-type-post_type menu-item-object-cea-team menu-item-77640">
                                                            <a href="https://www.millstreetenergy.com/?cea-team=mary-vels">CONTACT</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-77709"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-77709">
                                                    <a href="https://www.millstreetenergy.com/?page_id=77059">SOLUTIONS</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-77643"
                                                            className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-77643">
                                                            <a
                                                                href="https://www.millstreetenergy.com/?cea-service=recycle-products">
                                                                EV CHARGING SOLUTIONS
                                                            </a></li>
                                                        <li id="menu-item-77644"
                                                            className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-77644">
                                                            <a
                                                                href="https://www.millstreetenergy.com/?cea-service=bioenergy-geothermal">
                                                                ELECTRIFICATION SOLUTIONS
                                                            </a></li>
                                                        <li id="menu-item-77645"
                                                            className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-77645">
                                                            <a
                                                                href="https://www.millstreetenergy.com/?cea-service=solar-power-solutions">
                                                                EFFICIENCY SOLUTIONS
                                                            </a></li>
                                                        <li id="menu-item-77646"
                                                            className="menu-item menu-item-type-post_type menu-item-object-cea-service menu-item-77646">
                                                            <a
                                                                href="https://www.millstreetenergy.com/?cea-service=wind-power-concepts">
                                                                CONSTRUCTION SERVICES
                                                            </a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li id="menu-item-77710"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-77710">
                                                    <a href="https://www.millstreetenergy.com/?page_id=76985">SECTORS</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-77711"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77711">
                                                            <a href="https://www.millstreetenergy.com/?page_id=76985">SECTORS</a></li>
                                                        <li id="menu-item-77712"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77712">
                                                            <a href="https://www.millstreetenergy.com/?page_id=76986">CASE STUDIES</a></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-77715"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-77715">
                                                    <a href="https://www.millstreetenergy.com/?page_id=77302">PROGRAMS</a>
                                                </li>
                                                <li id="menu-item-77651"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77651">
                                                    <a href="https://www.millstreetenergy.com/?page_id=76886">CAREERS</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           

            {/* <div className="header-titles" style={{display:"none"}}>
                <h1 className="site-logo"><a href="https://www.millstreetenergy.com/"
                    className="default-logo test"><img
                        src="/Mill-Street-Energy-Logo-Black-Text.png"
                        alt="Mill Street Energy (MSE)" /></a><span
                            className="screen-reader-text">Mill Street Energy (MSE)</span></h1>
            </div>                                  */}
        </header>
    );
};

export default Header;

import React from 'react'
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <>

        <header className="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">

        <div className="container">
            <div className="row align-items-center">
                
                <div className="col-6 col-xl-2">
                    <h1 className="mb-0 site-logo"><Link to="/" className="text-black mb-0 nodeco">TwoBrothers</Link><span className="icon-shoes"></span></h1>
                </div>
                <div className="col-12 col-md-10 d-none d-xl-block">
                    <nav className="site-navigation position-relative text-right" role="navigation">

                        <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                            <li>
                                <NavLink to="/" className="nav-link" exact>Home</NavLink>
                            </li>                            
                            <li>
                                <NavLink to="/products" className="nav-link">Products</NavLink>
                            </li> 
                            <li>
                                <NavLink to="/about" className="nav-link">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>                                                                                       
                        </ul>
                    </nav>
                </div>


                <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3 estilo1"><a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>

            </div>
        </div>

        </header>

        </>
    )
}

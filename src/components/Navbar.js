import React from 'react'
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import $ from 'jquery';


class Navbar extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidMount(){

        var siteMenuClone = function() {

            $('.js-clone-nav').each(function() {
              var $this = $(this);
              $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
            });
        
        
            setTimeout(function() {
              
              var counter = 0;
              $('.site-mobile-menu .has-children').each(function(){
                var $this = $(this);
                
                $this.prepend('<span class="arrow-collapse collapsed">');
        
                $this.find('.arrow-collapse').attr({
                  'data-toggle' : 'collapse',
                  'data-target' : '#collapseItem' + counter,
                });
        
                $this.find('> ul').attr({
                  'class' : 'collapse',
                  'id' : 'collapseItem' + counter,
                });
        
                counter++;
        
              });
        
            }, 1000);
        
            $('body').on('click', '.arrow-collapse', function(e) {
              var $this = $(this);
              if ( $this.closest('li').find('.collapse').hasClass('show') ) {
                $this.removeClass('active');
              } else {
                $this.addClass('active');
              }
              e.preventDefault();  
              
            });
        
            $(window).resize(function() {
              var $this = $(this),
                w = $this.width();
        
              if ( w > 768 ) {
                if ( $('body').hasClass('offcanvas-menu') ) {
                  $('body').removeClass('offcanvas-menu');
                }
              }
            })
        
            $('body').on('click', '.js-menu-toggle', function(e) {
              var $this = $(this);
              e.preventDefault();
        
              if ( $('body').hasClass('offcanvas-menu') ) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
              } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
              }
            }) 
        
            // click outisde offcanvas
            $(document).mouseup(function(e) {
              var container = $(".site-mobile-menu");
              if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ( $('body').hasClass('offcanvas-menu') ) {
                  $('body').removeClass('offcanvas-menu');
                }
              }
            });
          }; 
          siteMenuClone();              
        
          var siteScroll = function() {
        
            $(window).scroll(function() {
        
              var st = $(this).scrollTop();
        
              if (st > 80) {
                $('.js-sticky-header').addClass('shrink');
                $('.contentj').addClass('extratop');
              } else {
                $('.js-sticky-header').removeClass('shrink');
                $('.contentj').removeClass('extratop');
              }
        
            }) 
        
          };
          siteScroll();  

    }
    render(){
      return(
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
  };
  
  export default Navbar;
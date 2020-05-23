import React from 'react'
import AOS from 'aos';
import about1 from '../assets/images/about_1.jpg'
import person2 from '../assets/images/person_2.jpg'
import person3 from '../assets/images/person_3.jpg'
import person4 from '../assets/images/person_4.jpg'

class About extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidMount(){
      AOS.init({
        duration : 2000
      })
    }
    render(){
      return(
        <>
    <div className="site-section" id="about-section">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-8 mb-5 mb-lg-0 position-relative">
            <img src={about1} className="img-fluid" alt="Image"/>
            <div className="experience">
              <span className="year">Trusted Merchant</span>
              <span className="caption">for 50 years</span>
            </div>
          </div>
          <div className="col-md-3 ml-auto">
            <h3 className="section-sub-title">Merchant Company</h3>
            <h2 className="section-title mb-3">About Us</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
            <p><a href="#" className="btn btn-black btn-black--hover rounded-0">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="section-sub-title">Team</h3>
            <h2 className="section-title mb-3">Leadership</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <div className="person text-center">
              <img src={person2} alt="Image" className="img-fluid rounded w-75 mb-3"/>
              <h3>John Rooster</h3>
              <p className="position text-muted">Co-Founder, President</p>
              <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <ul className="ul-social-circle">
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                <li><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <div className="person text-center">
              <img src={person3} alt="Image" className="img-fluid rounded w-75 mb-3"/>
              <h3>Tom Sharp</h3>
              <p className="position text-muted">Co-Founder, COO</p>
              <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <ul className="ul-social-circle">
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                <li><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
            <div className="person text-center">
              <img src={person4} alt="Image" className="img-fluid rounded w-75 mb-3"/>
              <h3>Winston Hodson</h3>
              <p className="position text-muted">Marketing</p>
              <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <ul className="ul-social-circle">
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                <li><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>    
        </>
      )
    }
  };
  
  export default About;
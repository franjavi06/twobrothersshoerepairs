import React from 'react'
import AOS from 'aos';
import MainSlider from '../components/MainSlider'
import Services from '../components/Services'
import FeaturedProducts from '../components/FeaturedProducts';
import GetNotified from '../components/GetNotified';

class Home extends React.Component {
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
            <MainSlider></MainSlider>
            <Services/>
            <FeaturedProducts></FeaturedProducts>
            <GetNotified></GetNotified>
        </>
      )
    }
  };
  
  export default Home;
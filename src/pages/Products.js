import React from 'react'
import AOS from 'aos';
import ProductList from '../components/ProductList'

class Products extends React.Component {
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
  
        <ProductList></ProductList>     
        </>
      )
    }
  };
  
  export default Products;
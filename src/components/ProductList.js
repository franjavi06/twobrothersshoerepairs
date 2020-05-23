import React from 'react'
import img1 from '../assets/images/model_1_bg.jpg'
import img2 from '../assets/images/model_2_bg.jpg'
import img3 from '../assets/images/model_3_bg.jpg'
import img4 from '../assets/images/model_4_bg.jpg'
import img5 from '../assets/images/model_5_bg.jpg'
import img6 from '../assets/images/product_1_bg.jpg'
import {Link} from 'react-router-dom';

export default function ProductList() {
    return (
        <>
    <div className="site-section" id="products-section">
      <div className="container">

        <div className="row">

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img src={img1} alt="Image" className="img-fluid"/>
              </figure>
              <div className="px-4">
                <h3><a href="#">Wild West Hoodie</a></h3>
                <div className="mb-3">
                  <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning"></span></a> 5.0</span>
                  <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart"></span></a> 29</span>
                </div>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div>
                  <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                  <a href="/products/1" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </div>
              </div>
            </div>
          </div>

        <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
                <figure>
                    <img src={img2} alt="Image" className="img-fluid"/>
                </figure>
                <div className="px-4">
                    <h3><a href="#">Wild West Hoodie</a></h3>
                    <div className="mb-3">
                        <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning"></span></a> 5.0</span>
                        <span className="meta-icons wishlist active"><a href="#" className="mr-2"><span className="icon-heart"></span></a> 29</span>
                    </div>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <div>
                        <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                        <a href="/products/2" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                    </div>
                </div>
            </div>
        </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img src={img3} alt="Image" className="img-fluid"/>
              </figure>
              <div className="px-4">
                <h3><a href="#">Wild West Hoodie</a></h3>
                <div className="mb-3">
                  <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning"></span></a> 5.0</span>
                  <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart"></span></a> 29</span>
                </div>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div>
                  <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                  <a href="/products/3" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img src={img4} alt="Image" className="img-fluid"/>
              </figure>
              <div className="px-4">
                <h3><a href="#">Wild West Hoodie</a></h3>
                <div className="mb-3">
                  <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning"></span></a> 5.0</span>
                  <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart"></span></a> 29</span>
                </div>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div>
                  <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                  <a href="/products/4" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img src={img5} alt="Image" className="img-fluid"/>
              </figure>
              <div className="px-4">
                <h3><a href="#">Wild West Hoodie</a></h3>
                <div className="mb-3">
                  <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning"></span></a> 5.0</span>
                  <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart"></span></a> 29</span>
                </div>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div>
                  <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                  <a href="/products/5" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img src={img6} alt="Image" className="img-fluid"/>
              </figure>
              <div className="px-4">
                <h3><a href="#">Wild West Hoodie</a></h3>
                <div className="mb-3">
                  <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning"></span></a> 5.0</span>
                  <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart"></span></a> 29</span>
                </div>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div>
                  <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                  <a href="/products/6" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
        </>
    )
}

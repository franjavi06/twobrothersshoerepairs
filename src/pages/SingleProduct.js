import React from 'react'
import model1 from '../assets/images/model_1_bg.jpg'

export default function SingleProduct() {
    return (
        <>
   <div className="site-section bg-light">
      <div className="container">

        <div className="bg-white py-4 mb-4">
          <div className="row mx-4 my-4 product-item-2 align-items-start">
            <div className="col-md-6 mb-5 mb-md-0">
              <img src={model1} alt="Image" className="img-fluid"/>
            </div>
           
            <div className="col-md-5 ml-auto product-title-wrap">

                <h3 className="text-black mb-4 font-weight-bold">About This Product</h3>
                <p className="mb-4">Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>
                
                <div className="mb-4"> 
                <h3 className="text-black font-weight-bold h5">Price:</h3>
                <div className="price"><del className="mr-2">$269.00</del> $69.00</div>
                </div>

<div className="mb-1 d-flex">
<label htmlFor="option-sm" className="d-flex mr-3 mb-3">
<span className="d-inline-block mr-2 sizestyle"><input type="radio" id="option-sm" name="shop-sizes"/></span> <span className="d-inline-block text-black">Small</span>
</label>
<label htmlFor="option-md" className="d-flex mr-3 mb-3">
<span className="d-inline-block mr-2 sizestyle"><input type="radio" id="option-md" name="shop-sizes"/></span> <span className="d-inline-block text-black">Medium</span>
</label>
<label htmlFor="option-lg" className="d-flex mr-3 mb-3">
<span className="d-inline-block mr-2 sizestyle"><input type="radio" id="option-lg" name="shop-sizes"/></span> <span className="d-inline-block text-black">Large</span>
</label>
<label htmlFor="option-xl" className="d-flex mr-3 mb-3">
<span className="d-inline-block mr-2 sizestyle"><input type="radio" id="option-xl" name="shop-sizes"/></span> <span className="d-inline-block text-black"> Extra Large</span>
</label>
</div>                

                <div className="mb-5">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-dark js-btn-minus" type="button">−</button>
                        </div>
                        <input type="text" className="form-control text-center" value="2" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark js-btn-plus" type="button">+</button>
                        </div>
                    </div>
                </div>   

                <p>
                <a href="#" className="btn btn-black rounded-0 d-block d-lg-inline-block">Add To Cart</a>
                </p>
            </div>
          </div>
        </div>

      </div>
    </div>
        </>
    )
}

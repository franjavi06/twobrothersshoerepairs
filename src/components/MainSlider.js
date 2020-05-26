import React from 'react'
import {Link} from 'react-router-dom';

export default function MainSlider() {
    return (
        <>

        <div className="site-blocks-cover overlay fondoslider" data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center justify-content-center">

                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                                    
                        <div className="row mb-4">
                            <div className="col-md-7">
                                <h1>Shoe Repairs {`&`} Footwear Store</h1>
                                <p className="mb-5 lead">We are SPACIALIZED in shoes-luggages-jackets-sneakers and bags REPAIRS. We clean, dye and recondition all leathers and synthetics goods</p>
                                <div>
                                    <a href="/products" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a>
                                    <a href="#" className="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block">Start your Repair</a>
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

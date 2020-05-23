import React from 'react'

export default function Services() {
    return (
        <>
            <div className="site-section bg-light" id="services-section">
            <div className="container">
                <div className="row mb-5">
                <div className="col-12 text-center">
                    <h3 className="section-sub-title">Our Services</h3>
                    <h2 className="section-title mb-3">We Offer Services</h2>
                </div>
                </div>
                <div className="row align-items-stretch">
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                    <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4"><span className="text-mamei icon-pie_chart"></span></div>
                    <div>
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4"><span className="text-mamei icon-backspace"></span></div>
                    <div>
                        <h3>Market Analysis</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4"><span className="text-mamei icon-av_timer"></span></div>
                    <div>
                        <h3>User Monitoring</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>            
        </>
    )
}

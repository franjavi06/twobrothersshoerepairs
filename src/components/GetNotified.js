import React from 'react'

export default function GetNotified() {
    return (
        <>
    <div className="site-blocks-cover inner-page-cover overlay get-notification notified-img" data-aos="fade">
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <form className="col-md-7" method="post">
            <h2>Get notified on each updates.</h2>
            <div className="d-flex mb-4">
              <input type="text" className="form-control rounded-0" placeholder="Enter your email address"/>
              <input type="submit" className="btn btn-white btn-outline-white rounded-0" value="Subscribe"/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
          </form>
        </div>

      </div>
    </div>            
        </>
    )
}

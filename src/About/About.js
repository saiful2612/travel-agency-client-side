import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="support-company-area bottom-padding my-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-4">
            <div className="support-location-img">
              <img
                src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/xabout.png.pagespeed.ic.ZsrvwBYE3S.webp"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="right-caption">
              <div className="section-tittle">
                <span>About Us</span>
                <h2 className="section-heading display-5">
                  Get ready for real time adventure
                </h2>
              </div>
              <div className="support-caption">
                <p className="mb-4">
                  Let’s start your journey with us, your dream will come true.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nostrud exercitation.
                </p>
                <button className="btn btn-lg btn-danger">
                  Book Your Destination
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

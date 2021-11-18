import React from "react";
import "./Banner.css";
import bannerImg from "../images/undraw_explore_re_8l4v.svg";
const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div class="container ">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6 text-white">
            <h1 className="display-3">Adventure is Worthwhile</h1>
            <h4 className="mt-3 mb-4">
              Discover New Place With Us, Adventure Awaits
            </h4>
            <button className="btn btn-lg btn-danger">Discover Tours</button>
          </div>
          <div class="col-lg-6 text-white">
            <img src={bannerImg} alt="banner" className="img-fluid bannerImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

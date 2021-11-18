import React from "react";
import "./Service.css";
import Rating from "react-rating";
import { useHistory } from "react-router";
const Service = (props) => {
  const history = useHistory();
  const {
    id,
    tourName,
    image,
    cost,
    duration,
    description,
    ratings,
    ratingsQuantity,
  } = props.service;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single_place shadow">
        <div className="thumb">
          <img src={image} alt={tourName} />
          <span className="prise">${cost}</span>
        </div>
        <div className="place_info">
          <h3>{tourName}</h3>
          <p className="my-2">{description}</p>
          <div className="rating_days d-flex justify-content-between">
            <span className="d-flex justify-content-center align-items-center">
              <Rating
                emptySymbol="far fa-star icon"
                fullSymbol="fas fa-star icon"
                initialRating={ratings}
                readonly
                className="ratings"
              />
              <span className="ratingsQuantity">
                ({ratingsQuantity} Review)
              </span>
            </span>
            <div className="days">
              <i className="far fa-clock"></i>
              <span>{duration}</span>
            </div>
          </div>
          <button
            className="btn text-white mt-3"
            style={{ background: "#7ea0ff" }}
            onClick={() => history.push(`/details/${id}`)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

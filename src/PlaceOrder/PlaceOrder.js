import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = (props) => {
  const history = useHistory();
  const {
    tourName,
    duration,
    description,
    image,
    cost,
    benefits
  } = props.desireService || {};
  const {
    user: { displayName, email },
  } = useAuth();

  const [userInfo, setUserInfo] = useState({
    name: displayName,
    email: email,
    phone: "",
    address: "",
  });

  const handleInputBlur = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const userOrder = {
      ...userInfo,
      ...props.desireService,
      status: "pending",
    };
    delete userOrder._id;
    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userOrder),
    });
    history.push("/myorders");
  };

  return (
    <div className="container my-3">
      <div className="row gx-5 align-items-center">
        <div className="cardStyles text-center  col-lg-6">
          <img
            src={image}
            className="img-fluid card-image rounded"
            alt={tourName}
          />
          <h3 className="mt-3"> {tourName}</h3>
          <h5>Tour length : {duration}</h5>
          <h4 className="mt-3">
            Tour Cost : <span className="amount-style">${cost}</span>
          </h4>
          <p className="px-4">{description}</p>
          <p>
            {" "}
            <span className="offer-writting">We offer : </span>
            <small>{benefits}</small>{" "}
          </p>

          <Link to="/home">
            <button className="btn btn-primary button-style">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="col-lg-6">
          <form className="shadow p-4 book-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onBlur={handleInputBlur}
                defaultValue={displayName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                required
                onBlur={handleInputBlur}
                defaultValue={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Your Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                required
                onBlur={handleInputBlur}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                required
                onBlur={handleInputBlur}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

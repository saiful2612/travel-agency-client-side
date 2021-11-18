import React from "react";
import { useHistory } from "react-router-dom";
import "./NoDataFound.css";
const NotFound = () => {
  const history = useHistory();
  return (
    /* 404 Page */
    <section className="notFound">
      <div className="text-center">
        <img
          className="notFoundImg"
          src="https://explorers-tours-and-travels.web.app/static/media/404.592fab38.png"
          alt="Page not found"
        />
        <h2>OPPS! PAGE NOT FOUND</h2>

        <button
          className="btn notFoundBtn my-3"
          onClick={() => history.push("/")}
        >
          GO TO HOME PAGE
        </button>
      </div>
    </section>
  );
};
export default NotFound;

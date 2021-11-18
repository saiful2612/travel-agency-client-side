import React, { useState } from "react";

const AddTour = () => {
  const [tourData, setTourData] = useState({});

  const handleInputBlur = (event) => {
    const { name, value } = event.target;
    setTourData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/tours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tourData),
    });
    await response.json();
    alert('New Tour Plan is added')
    event.target.reset()
  };
  return (
    <div className="container add-user mb-5">
      <h2 className="display-4 text-center my-5">Add A New Tour</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label htmlFor="tourName" className="form-label">
                Tour Name
              </label>
              <input
                type="text"
                className="form-control"
                id="tourName"
                required
                onBlur={handleInputBlur}
                name="tourName"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="tourImage" className="form-label">
                Image Link
              </label>
              <input
                type="text"
                className="form-control"
                id="tourImage"
                required
                onBlur={handleInputBlur}
                name="tourImage"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                id="description"
                style={{ height: "120px", resize: "none" }}
                className="form-control"
                required
                onBlur={handleInputBlur}
                name="description"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label htmlFor="cost" className="form-label">
                Tour Cost
              </label>
              <input
                type="number"
                className="form-control"
                id="cost"
                required
                onBlur={handleInputBlur}
                name="cost"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="duration" className="form-label">
                Duration
              </label>
              <input
                type="text"
                className="form-control"
                id="duration"
                required
                onBlur={handleInputBlur}
                name="duration"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Tour Rating
              </label>
              <input
                type="number"
                className="form-control"
                id="rating"
                min="0"
                max="5"
                required
                onBlur={handleInputBlur}
                name="rating"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="benefits" className="form-label">
                Tour Benefits
              </label>
              <input
                type="text"
                className="form-control"
                id="benefits"
                required
                onBlur={handleInputBlur}
                name="benefits"
              />
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <button type="submit" className="btn btn-primary w-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTour;

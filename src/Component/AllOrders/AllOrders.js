import React, { useCallback, useEffect, useState } from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  const loadOrders = useCallback(async () => {
    const response = await fetch(`http://localhost:8000/orders`);
    const responseData = await response.json();
    setOrders(responseData);
  }, []);

  //Load user orders
  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  //Order delete handler
  const handleDelete = async (_id) => {
    if (window.confirm("Are You sure you want to delete the order?")) {
      const response = await fetch(`http://localhost:8000/orders/${_id}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      if (responseData.deletedCount > 0) {
        loadOrders();
      }
    }
  };

  //Approve order handler
  const handleApprove = async (_id) => {
    const response = await fetch(`http://localhost:8000/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.ok > 0) {
      loadOrders();
    }
  };
  //Order id counter
  let count = 1;

  return (
    <div>
      <h1 className="text-center my-5 display-4">All Orders</h1>
      <div className="container-lg table-responsive mb-5">
        <table className="table table-striped  table-hover table-bordered  align-middle shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Tour Name </th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th scope="row">
                  {count++} {order._id}
                </th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>
                  {order.tourName}
                  <img
                    src={order.image}
                    alt="tour"
                    className="ms-3 rounded-circle"
                    height="40"
                  />
                </td>
                <td>${order.cost}</td>
                <td>
                  {" "}
                  <small
                    style={{
                      background: `${
                        order.status === "pending" ? "#077E8C" : "#28B487"
                      }`,
                    }}
                    className="text-white py-1 px-2 rounded-pill"
                  >
                    {" "}
                    {order.status === "pending" ? "Pending" : "Approved"}
                  </small>
                </td>
                <td>
                  {order.status === "pending" && (
                    <button
                      className="btn-sm btn btn-secondary me-3"
                      onClick={() => handleApprove(order._id)}
                    >
                      Mark as Approved
                    </button>
                  )}
                  <i
                    className="fas fa-trash"
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(order._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;

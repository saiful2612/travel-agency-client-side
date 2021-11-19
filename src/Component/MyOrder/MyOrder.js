import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const {
    user: { email },
  } = useAuth();

  const loadUserOrders = useCallback(async () => {
    const response = await fetch(`https://evening-peak-04757.herokuapp.com/orders/${email}`);
    const responseData = await response.json();
    setOrders(responseData);
  }, [email]);

  //Load user orders
  useEffect(() => {
    loadUserOrders();
  }, [email, loadUserOrders]);

  //Order delete handler
  const handleDelete = async (_id) => {
    if (window.confirm("Are You sure you want to delete the order?")) {
      const response = await fetch(`https://evening-peak-04757.herokuapp.com/orders/${_id}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      if (responseData.deletedCount > 0) {
        loadUserOrders();
      }
    }
  };
  //Order id counter
  let count = 1;

  return (
    <div>
      <h1 className="text-center my-5 display-4">My Orders</h1>
      <div className="container-lg table-responsive mb-5">
        <table className="table table-striped  table-hover table-bordered  align-middle shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Tour Name </th>
              <th scope="col">Duration</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <th scope="row">{count++}</th>
                <td>{order.name}</td>
                <td>
                  {order.tourName}
                  <img
                    src={order.image}
                    alt="tour"
                    className="ms-3 rounded-circle"
                    height="40"
                  />
                </td>
                <td>{order.duration}</td>
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

export default MyOrder;

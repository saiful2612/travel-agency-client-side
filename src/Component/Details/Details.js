import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PlaceOrder from "../../PlaceOrder/PlaceOrder";

const Details = () => {
  const { detailsId } = useParams();

  const [product, setProducts] = useState({});

  useEffect(() => {
    fetch("https://evening-peak-04757.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setProducts(data.find((item) => item.id === +detailsId)));
  }, [detailsId]);

  return (
    <div>
      <PlaceOrder desireService={product}></PlaceOrder>
    </div>
  );
};

export default Details;

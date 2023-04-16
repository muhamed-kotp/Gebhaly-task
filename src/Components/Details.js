import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";

const Details = () => {
  const { ID } = useParams();

  const [data, setdata] = useState({});

  // to view the product details

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9000/products/${ID}`,
    }).then((data) => {
      setdata(data.data);
    });
  }, []);

  return (
    <div className="row">
      <div className="col-2 sideBar">
        <SideBar />
      </div>

      <div className="col-10 user-details-barent">
        <div className="user-details-container p-5">
          <h1> Name = {data.name}</h1>
          <h1> Price = {data.price}</h1>
          <h1> Items = {data.count}</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;

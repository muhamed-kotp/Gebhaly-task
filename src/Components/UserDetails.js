import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import "../Style/userDetails.css";

const UserDetails = () => {
  const { ID } = useParams();

  const [data, setdata] = useState({});

  // to view the user details
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9000/users/${ID}`,
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
          <h1> Age = {data.age}</h1>
          <h1> E-mail = {data.mail}</h1>
          <h1> Role = {data.role}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

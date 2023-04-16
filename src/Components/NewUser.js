import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const NewUsers = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [role, setrole] = useState("member");
  const [gender, setgender] = useState("male");
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");

  const formhandle = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9000/users",
      data: { name, age, role, mail, pass, gender },
    }).then((data) => navigate("/Users"));
  };
  return (
    <div>
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>
        <div className="col-10">
          <Form onSubmit={formhandle} className="new-product-form">
            <Form.Group className="mb-3 new-product-name-G">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="search"
                placeholder="User Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 new-product-price-G">
              <Form.Label>User Age </Form.Label>
              <Form.Control
                type="number"
                placeholder="User Age"
                value={age}
                onChange={(e) => setage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 new-product-price-G">
              <Form.Label> Gender</Form.Label>
              <Form.Select
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              >
                <option>male</option>
                <option>female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 new-product-price-G">
              <Form.Label> E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder=" Please enter Your E-mail"
                value={mail}
                onChange={(e) => setmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 new-product-price-G">
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Please enter Password from 5 numbers"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 new-product-price-G">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={role}
                onChange={(e) => setrole(e.target.value)}
              >
                <option>member</option>
                <option>admin</option>
              </Form.Select>
            </Form.Group>
            <div className="new-user-submit-btn">
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewUsers;

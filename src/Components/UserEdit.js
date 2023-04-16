import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SideBar from "./SideBar";

const UserEdit = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [mail, setMail] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [pass, setPass] = useState("");
  const { ID } = useParams();
  // console.log(ID);

  // to view the user details
  const getData = () => {
    axios({
      method: "get",
      url: `http://localhost:9000/users/${ID}`,
    }).then((data) => {
      const obj = data.data;
      setname(obj.name);
      setage(obj.age);
      setMail(obj.mail);
      setRole(obj.role);
      setGender(obj.gender);
      setPass(obj.pass);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  // to allow admin to edit the details of user
  const formhandle = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:9000/users/${ID}`,
      data: { name, age, mail, pass, role, gender },
    }).then((data) => {
      getData();
      navigate("/Users");
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>
        <div className="col-10 p-5">
          <Form onSubmit={formhandle}>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="search"
                placeholder="User Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="age"
                value={age}
                onChange={(e) => setage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Please Enter Your Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mail or Femail"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>role</Form.Label>
              <Form.Control
                type="text"
                placeholder="admin or member"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default UserEdit;

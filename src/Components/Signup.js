import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Store from "../Context/Store";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [nameErorr, setnameErorr] = useState("User Name");
  const [age, setage] = useState(0);
  const [ageErorr, setageErorr] = useState("Age");
  const [role, setrole] = useState("member");
  const [gender, setgender] = useState("male");
  const [mail, setmail] = useState("");
  const [mailErorr, setmailErorr] = useState("E-mail");
  const [pass, setpass] = useState("");
  const [passErorr, setpassErorr] = useState("Password");
  const [allready, setallready] = useState("");

  const Context = useContext(Store);

  const formhandle = (e) => {
    e.preventDefault();
    let x = false;
    Context.storeUsers.map((e) => {
      if (e.mail === mail && !x) {
        setnameErorr("User Name");
        setageErorr("Age");
        setmailErorr("E-mail");
        setpassErorr("Password")
        setallready(`This E-mail is allready exist \n you need to`);
        
        x = true;
      }
    });
       if (x === false) {
        if (name === "" || !isNaN(name)) {
          setallready("");
          setnameErorr("Invalid User Name");
        } else if (age <= 0) {
          setallready("");
          setnameErorr("User Name");
          setageErorr("Invalid Age");
        } else if (mail === "") {
          setallready("");
          setnameErorr("User Name");
          setageErorr("Age");
          setmailErorr("Please Enter Your E-mail");
        } else if (pass === "") {
          setallready("");
          setnameErorr("User Name");
          setageErorr("Age");
          setmailErorr("E-mail");
          setpassErorr("Please Enter a Strong Password")
        } 
        else {
          axios({
            method: "post",
            url: "http://localhost:9000/users",
            data: { name, age, role, mail, pass, gender },
          }).then((data) => navigate("/Signin"));
        }
      }

  };

  useEffect(() => {}, []);
  return (
    <div>
      <Form className="form-cont" onSubmit={formhandle}>
        <Form.Group className=" signup-FG">
          <Form.Label
            className={nameErorr === "User Name" ? "lable" : "lableError"}
          >
            {nameErorr}
          </Form.Label>
          <Form.Control
            type="search"
            placeholder=" Please Write Your Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" signup-FG">
          <Form.Label className={ageErorr === "Age" ? "lable" : "lableError"}>
            {ageErorr}{" "}
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="User Age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" signup-FG">
          <Form.Label> Gender</Form.Label>
          <Form.Select
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          >
            <option>male</option>
            <option>female</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className=" signup-FG">
          <Form.Label
            className={mailErorr === "E-mail" ? "lable" : "lableError"}
          >
            {" "}
            {mailErorr}
          </Form.Label>
          <Form.Control
            type="email"
            placeholder=" Please enter Your E-mail"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 signup-FG">
          <Form.Label className={passErorr === "Password" ? "lable" : "lableError"}> {passErorr} </Form.Label>
          <Form.Control
            type="password"
            placeholder=" minimum 5 charcters -  maximum 12 charcters"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
        </Form.Group>

        <Form.Label className="allready">
          {allready}
          <Link to={"/Signin"}>
            <Navbar.Brand className={allready === "" ? "d-n" : "allready-Text"}>
              Sign in
            </Navbar.Brand>
          </Link>
        </Form.Label>

        <Button className="signUp-btn" variant="outline-success" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;

{
  /* <label class="allready form-label"> This E-mail is allready exist <br> you need to <a href="/Signin"><span class="allready-Text navbar-brand">Sign in</span></a></label> */
}

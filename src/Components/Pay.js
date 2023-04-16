import axios from "axios";
import React, { useState, useContext, } from "react";
import Store from "../Context/Store";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";
import "../Style/Pay.css"

const Pay = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [nameErorr, setnameErorr] = useState("User Name");
  const [cardNo, setcardNo] = useState(0);
  const [cardNoErorr, setcardNoErorr] = useState("Card Number");
  const [role, setrole] = useState("member");
  const [payMethod, setpayMethod] = useState("male");
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
        setcardNoErorr("Card Number");
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
        } else if (cardNo <= 0) {
          setallready("");
          setnameErorr("User Name");
          setcardNoErorr("Invalid Card Number");
        } else if (mail === "") {
          setallready("");
          setnameErorr("User Name");
          setcardNoErorr("Card Number");
          setmailErorr("Please Enter Your E-mail");
        } else if (pass === "") {
          setallready("");
          setnameErorr("User Name");
          setcardNoErorr("Card Number");
          setmailErorr("E-mail");
          setpassErorr("Please Enter a Strong Password")
        } 
        else {
          axios({
            method: "post",
            url: "http://localhost:9000/users",
            data: { name, cardNo, role, mail, pass,  },
          }).then((data) => navigate("/Signin"));
        }
      }

  };
  const payhandle =(e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <Form className="form-cont" onSubmit={payhandle}>
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
          <Form.Label> Pay method</Form.Label>
          <Form.Select
            value={payMethod}
            onChange={(e) => setpayMethod(e.target.value)}
          >
            <option>cash</option>
            <option>credit card</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className=" signup-FG">
          <Form.Label className={cardNoErorr === "Card Number" ? "lable" : "lableError"}>
            {cardNoErorr}{" "}
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Card Number"
            value={cardNo}
            onChange={(e) => setcardNo(e.target.value)}
          />
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

        <Button className="signUp-btn" variant="outline-success" type="submit">
          Pay
        </Button>
      </Form>
    </div>
  )
}

export default Pay
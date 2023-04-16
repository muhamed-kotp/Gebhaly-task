import React, { useState, useContext, useEffect } from "react";
import Store from "../Context/Store";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../Style/form.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import ClipLoader from "react-spinners/ClipLoader";

const Signin = () => {
  const [icon] = useState(<RiErrorWarningFill />);
  const [loading, setLoading] = useState(false);
  const [passtype, setpasstype] = useState("password");

  const showPassword = () => {
    if (passtype === "password") {
      setpasstype("text");
      return;
    }
    setpasstype("password");
  };

  const Context = useContext(Store);

  useEffect(() => {
    Context.Storegetusers();
    setLoading(false);
  }, []);

  return (
    <div className="signIn-fullpage">
      <Form className="signin-form-cont" onSubmit={Context.StoreHandelForm}>
        <Form.Group className="first mb-3" controlId="formBasicEmail">
          <Form.Label>{Context.storeuserNameErorr}</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter Your E-mail"
            value={Context.storemail}
            onChange={(e) => {
              Context.StoreWriteMail(e);
            }}
          />
        </Form.Group>
        <Form.Group className="sec mb-3">
          <Form.Label>{Context.storepassErorr}</Form.Label>
          <div className="pass-container">
            <Form.Control
              // name="Please Enter correct E-mail address"
              className="form-input"
              type={passtype}
              placeholder="Password"
              value={Context.storepass}
              onChange={(e) => {
                Context.StoreWritePass(e);
              }}
            />

            <Button onClick={showPassword} className="eye-btn">
              {passtype === "password" ? (
                <AiFillEyeInvisible className="eye" />
              ) : (
                <AiFillEye className="eye" />
              )}
            </Button>
          </div>
        </Form.Group>

        <h5 className="incorrect">
          <span className={Context.storeincorrect === "" ? "d-n" : "d-block"}>
            {icon}
          </span>
          {Context.storeincorrect}
        </h5>

        <Button className="logIn-btn" variant="outline-success" type="submit">
          <ClipLoader
            color="#36d7b7"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            className="spinner"
          />
          {"  "} Log In
        </Button>

        <Nav.Link className="signup-btn-cont" as={NavLink} to={`/Signup`}>
          <Button className="signup-btn" variant="outline-primary">
            Sing-Up
          </Button>
        </Nav.Link>
      </Form>
    </div>
  );
};

export default Signin;

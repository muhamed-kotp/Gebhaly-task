import React, { useEffect, useContext, useState } from "react";
import Store from "../Context/Store";
import { Button, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "../Style/ShoppingCarD.css";
import { AiFillWarning } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { ImBoxRemove } from "react-icons/im";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";

const ShoppingCarD = () => {
  const Context = useContext(Store);
  const navigate = useNavigate();

  const sale = Context.storeData;
  const [alert, setalert] = useState("");

  const TheName = Context.storesigninUser;

  // function to make user must sign in first before trying to pay
  const getPay = (e) => {
    e.preventDefault();
    let x = false;
    if (TheName === "") {
      setalert("Sorry but you need to sign in frist from here");
      x = true;
    }
    if (x === false) {
      navigate("/Pay");
    }
  };

  useEffect(() => {
    Context.StoregetTotal();
  }, []);

  if (sale.length === 0) {
    return (
      <div className="full-empty-bage">
        <Container className="w-100 first-container">
          <div className="empty">
            <AiFillWarning className="warning" />
            Your CarD iS Empty .. !
          </div>
        </Container>

        <div className=" DoYouWant-cont">
          <div className=" Continuo-container-empty container">
            Do You Want TO
          </div>

          <div>
            <Link className="Continuo-link " to="/Shop">
              <Button variant="outline-success" className="Continuo">
                Continuo Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="full-bagee">
        <div className=" total-container">
          <div className="total-div">
            The Total Price Is :{" "}
            <Badge className="total-price-badge" bg="danger">
              ${Context.storeTotal}{" "}
            </Badge>
          </div>

          <div className=" Continuo-container ">
            <Link className="Continuo-link " to="/Shop">
              <Button variant="outline-success" className="Continuo">
                Continuo Shopping
              </Button>
            </Link>
          </div>
        </div>
        <div className="SHCard-cont container ">
          {sale.map((e) => (
            <div key={e.id} className="shopingCard-cont">
              <Card className="SC-card-container">
                <Card.Img className="shop-card-img" variant="top" src={e.img} />

                <div className="shoping-card-Body">
                  <div className="SC-CB-1stLine">
                    <Card.Text className="SC-Name2">{e.name}</Card.Text>
                    <Card.Text className="SC-dollar2-cont">
                      <Badge bg="danger" className="SC-dollar2">
                        ${e.price}
                      </Badge>
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="SC-count2">
                      In Stock {e.count} more items
                    </Card.Text>
                  </div>

                  <div className="btns-container2">
                    <div className="ms-4">
                      <Card.Text className="SC-pusrches">
                        {e.pusrches} Items
                      </Card.Text>
                    </div>

                    <div className="SH-btns-cont">
                      <button
                        onClick={() => Context.StoreAdd(e)}
                        className="plus-logo-container"
                      >
                        <BiPlusMedical className="plus-logo" />
                      </button>
                      <button
                        onClick={() => Context.StoreDec(e)}
                        className="plus-logo-container"
                      >
                        <FaMinus className="minus-logo" />
                      </button>
                      <button
                        onClick={() => Context.StoreRemove(e)}
                        className="plus-logo-container"
                      >
                        <ImBoxRemove className="remove-logo" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div>
          <h4 className="allready">
            {alert}
            <Link to={"/Signin"}>
              <Navbar.Brand className={alert === "" ? "d-n" : "allready-Text"}>
                Sign in
              </Navbar.Brand>
            </Link>
          </h4>
          <div className="Pay-cont">
            {" "}
            <Button className="pay-btn" variant="success" onClick={getPay}>
              Proceed To Pay
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default ShoppingCarD;

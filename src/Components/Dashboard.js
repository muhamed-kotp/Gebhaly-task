import React, { useState, useContext, useEffect } from "react";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dashboard from "../Style/dashboard.css";
import Store from "../Context/Store";
import { Badge } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const Context = useContext(Store);
  const length = Context.storeUsers.length;
  const productLength = Context.storeProducts.length;

  return (
    <div>
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>

        <div className="col-10">
          <div className="dash-container">
            <Card className="fullCard">
              <Card.Header className="dash-header" as="h5">
                Products
              </Card.Header>
              <Card.Body className="dash-cardbody">
                <Card.Title className="dash-title">
                  you have <Badge bg="danger"> {productLength} </Badge> Products
                  Available{" "}
                </Card.Title>
                <Card.Text className="dash-text">
                  With Prices between{" "}
                  <Badge bg="danger"> ${Context.storeMinprice}</Badge> :{" "}
                  <Badge bg="danger"> ${Context.storeMaxprice}</Badge>
                </Card.Text>

                <Card.Text className="dash-text">
                  The Product with the fewest number of <br /> items is product
                  No <span className="nameStyle"> {Context.storefewestID}</span>{" "}
                  <br />
                  Which Has Only
                  <span className="nameStyle">
                    {" "}
                    {Context.storefewestItem}{" "}
                  </span>{" "}
                  Items
                </Card.Text>

                <Card.Text className="dash-text-btn">
                  To preview that user click Here
                  <Nav.Link
                    className="product-view"
                    variant="dark"
                    as={NavLink}
                    to={`/Products/${Context.storefewestID}`}
                  >
                    <Button variant="primary">View</Button>
                  </Nav.Link>
                </Card.Text>
                <div className="dash-btn">
                  <Nav.Link as={NavLink} to="/Products">
                    <Button variant="success">Manege Products</Button>
                  </Nav.Link>
                </div>
              </Card.Body>
            </Card>
            <Card className="fullCard">
              <Card.Header className="dash-header" as="h5">
                Users
              </Card.Header>
              <Card.Body className="dash-cardbody">
                <Card.Title className="dash-title">
                  you have <Badge bg="danger"> {length} </Badge> Users Registerd{" "}
                </Card.Title>
                <Card.Text className="dash-text">
                  With <Badge bg="danger"> {Context.storeMale} </Badge> males,
                  and <Badge bg="danger"> {Context.storeFemale} </Badge> females
                </Card.Text>
                <Card.Text className="dash-text">
                  With <Badge bg="danger"> {Context.storeAdmin} </Badge> admins,
                  and <Badge bg="danger"> {Context.storeMember} </Badge> members
                </Card.Text>
                <Card.Text className="dash-text">
                  The Newest Registered user is The owner of <br /> the account
                  No <span className="nameStyle"> {length}</span> Named{" "}
                  <span className="nameStyle">{Context.storelastName}</span>
                </Card.Text>
                <Card.Text className="dash-text-btn">
                  To preview that user click Here{" "}
                  <Nav.Link
                    className="product-view"
                    variant="dark"
                    as={NavLink}
                    to={`/Users/${length}`}
                  >
                    <Button variant="primary">View</Button>
                  </Nav.Link>
                </Card.Text>

                <div className="dash-btn">
                <Nav.Link as={NavLink} to="/Users">
                    <Button variant="success">Manege Users</Button>
                  </Nav.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

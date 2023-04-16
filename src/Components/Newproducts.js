import axios from "axios";
import React, { useState, useContext } from "react";
import Store from "../Context/Store";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import "../Style/NewProducts.css";

const Newproducts = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [items, setitems] = useState(0);
  const [pusrches] = useState(1);
  const [img, setimg] = useState("");
  const Context = useContext(Store);
  // function allow admin to add new product
  const formhandle = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9000/products",
      data: { name, price, count: items, img, pusrches },
    }).then((data) => navigate("/Products"));
    Context.StoregetProduct()
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
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="search"
                placeholder="Product Image"
                value={img}
                onChange={(e) => setimg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 new-product-price-G">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="search"
                placeholder="Product name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 new-product-price-G">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 new-product-items-G">
              <Form.Label>Product items</Form.Label>
              <Form.Control
                type="number"
                placeholder="Product items"
                value={items}
                onChange={(e) => setitems(e.target.value)}
              />
            </Form.Group>

            <div className="new-user-submit-btn">
              <Button className="fs-5" variant="danger" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Newproducts;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SideBar from "./SideBar";

const Edit = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [items, setitems] = useState(0);
  const [img, setimg] = useState("");
  const { ID } = useParams();
  console.log(ID);

  // to view the product details
  const getData = () => {
    axios({
      method: "get",
      url: `http://localhost:9000/products/${ID}`,
    }).then((data) => {
      const obj = data.data;
      setname(obj.name);
      setprice(obj.price);
      setitems(obj.count);
      setimg(obj.img);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  // to allow admin to edit the details of products
  const formhandle = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:9000/products/${ID}`,
      data: { name, price, count: items, img },
    }).then((data) => {
      getData();
      navigate("/Products");
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="search"
                placeholder="Product Image"
                value={img}
                onChange={(e) => setimg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="search"
                placeholder="Product name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product items</Form.Label>
              <Form.Control
                type="number"
                placeholder="Product items"
                value={items}
                onChange={(e) => setitems(e.target.value)}
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

export default Edit;

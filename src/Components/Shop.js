import React, { useContext } from "react";
import Store from "../Context/Store";
import shop1 from "../Photos/Shop1.jpg";
import Card from "react-bootstrap/Card";
import "../Style/shop.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { Badge } from "react-bootstrap";
const Shop = () => {

  const Context = useContext(Store);

  return (
    <div className="fullBage">
      <Card.Img className="shop-img1" src={shop1} />
      <div className="card-barent container ">
        {Context.storeProducts.map((product) => (
          <div key={product.id} className="shopCard-cont">
            <Card className="card-contaner">
              <Card.Img
                className="shop-card-img"
                variant="top"
                src={product.img}
              />
              <div className="shop-card-Body">
                <div className="shop-card-text-Container">
                  <Card.Text className="SC-Name">{product.name}</Card.Text>
                  <Card.Text className="SC-dollar">
                    <Badge bg="success" className="SC-dollar">
                      ${product.price}
                    </Badge>
                  </Card.Text>

                  <Card.Text className="ds-none">
                    count : {product.pusrches}
                  </Card.Text>
                </div>

                <div className="btns-container">
                  <div className="shop-card-text-Container2">
                    <button
                      onClick={() => Context.StoreBuy(product)}
                      className="shop-shopCart-link"
                    >
                      <MdShoppingBasket className="shop-shopCart-logo" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className=" goto-home-body container">
        <Button variant="outline-success" className="goto-home">
          <Link className="goto-home-link1 " to="/">
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Shop;

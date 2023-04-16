import React from "react";
import Carousel from "react-bootstrap/Carousel";
import LogoOne from "../Photos/logoOne.png";
import logoTwo from "../Photos/logoTwo.png";
import s1 from "../Photos/s1.jpg";
import s2 from "../Photos/s2.jpg";
import s3 from "../Photos/s3.jpg";
import s4 from "../Photos/s4.jpg";
import t1 from "../Photos/t1.jpg";
import t2 from "../Photos/t2.jpg";
import t3 from "../Photos/t3.jpg";
import t4 from "../Photos/t4.jpg";
import t5 from "../Photos/boot1";
import t6 from "../Photos/banse.jpg";
import fifth1 from "../Photos/fifth1.jpg";
import fifth2 from "../Photos/fifth2.jpg";
import fifth3 from "../Photos/fifth3.jpg";
import fifth4 from "../Photos/fifth4.jpg";
import fifth5 from "../Photos/fifth5.jpg";
import fifth6 from "../Photos/fifth6.jpg";
import "../Style/Home.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div className="fullBage">
      {/* ---------------------------Carousel---------------------------------------------------- */}
      <Carousel className="carosal-container">
        <Carousel.Item className="carosal">
          <span className="darkBG"></span>
          <img className="d-block w-100" src={LogoOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="carosal">
          <span className="darkBG"></span>
          <img className="d-block w-100" src={logoTwo} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      {/* ---------------------------Scond - Group---------------------------------------------------- */}

      <div className=" ScondGroup container ">
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s1} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Clothing</Card.Title>
            <Card.Text className=" ScondGroupText">10 Items </Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s2} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Bag Brand</Card.Title>
            <Card.Text className=" ScondGroupText">8 Items </Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s3} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Accessories</Card.Title>
            <Card.Text className=" ScondGroupText">6 Items</Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s4} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Shoes</Card.Title>
            <Card.Text className=" ScondGroupText">9 Items </Card.Text>
          </Card.Body>
        </div>
      </div>

      <Link to="/Shop">
        <div className="advertise ">
          <div className="Hurry ">Hurry, Quantities Limited! </div>

          <div className="win-cont">
            <div className="win"> WIN 250 EGP </div>
            <div className="orders">
              ON ALL ORDERS <br /> OVER 800 EGP
            </div>
          </div>

          <div className="Shop-cont">
            <div className="ad-shopNow"> Shop Now</div>
            <div className="online"> Online Only </div>
          </div>
        </div>
      </Link>

      <div className=" ScondGroup2  ">
        <div className=" ScondGroup-card-2">
          <Card.Img className=" ScondGroupImg2" variant="top" src={t5} />
          <Card.Body className="ScondGroup-CardBody2 ">
            <Card.Title className=" ScondGroupTitle">Boots</Card.Title>
            <Card.Text className=" ScondGroupText">Items 20</Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card-2">
          <Card.Img className=" ScondGroupImg2" variant="top" src={t6} />
          <Card.Body className="ScondGroup-CardBody2 ">
            <Card.Title className=" ScondGroupTitle">Classic</Card.Title>
            <Card.Text className=" ScondGroupText">Items 35</Card.Text>
          </Card.Body>
        </div>
      </div>

      {/* ---------------------------forth-group---------------------------------------------------- */}
      <div className="forth-group container ">
        <div className="forth-group-ist-img ">
          <div className="forth-group-text1">MERRY</div>
          <h1 className="forth-group-ist-img-text1">
            CHRISTMAS <span className="four">40% </span> OFF{" "}
          </h1>
          <Button variant="outline-success" className=" forth-group-shop-now1 ">
            <Link className="forth-group-shop-now-link1 " to="/Shop">
              Shop Now
            </Link>
          </Button>
        </div>

        <div className="forth-group-scond-img">
          <div className="forth-group-text2">
            Your <br /> Next
          </div>
          <h1 className="forth-group-ist-img-text2">
            Purchase <br /> 10 % OFF{" "}
          </h1>
          <Button className="forth-group-shop-now2">
            <Link className="forth-group-shop-now-link2 " to="/Shop">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>

      <Link to="/Shop">
        <div className="join-conT">
          <h3 className="join">JOIN US TO GET 20% OFF ON YOUR FIRTS ORDER </h3>
        </div>
      </Link>

      <h1 className="container Best">Best Selling...</h1>
      {/* ---------------------------third-group---------------------------------------------------- */}

      <div className="container thirdGroup ">
        <Card className="thirdGroupCarD">
          <Card.Img className="thirdGroupCarDImg" variant="top" src={t1} />

          <Card.Body className="thirdGroup-Cardbody">
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCarDText">
                Quilted Gilet
              </Card.Text>
              <Card.Text className="thirdGroupCardDollar">150.00 $</Card.Text>
              <Button className="THshop-now ">
                <Link className="THshop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="thirdGroupCarD">
          <Card.Img className="thirdGroupCarDImg" variant="top" src={t2} />

          <Card.Body className="thirdGroup-Cardbody">
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCarDText">OUTERWEAR</Card.Text>
              <Card.Text className="thirdGroupCardDollar">110.00 $</Card.Text>
              <Button variant="outline-success" className="THshop-now ">
                <Link className="THshop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="thirdGroupCarD">
          <Card.Img className="thirdGroupCarDImg" variant="top" src={t3} />
          <Card.Body className="thirdGroup-Cardbody">
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCarDText">T-Shirt</Card.Text>
              <Card.Text className="thirdGroupCardDollar">280.00 $</Card.Text>

              <Button variant="outline-success" className="THshop-now ">
                <Link className="THshop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="thirdGroupCarD">
          <Card.Img className="thirdGroupCarDImg" variant="top" src={t4} />
          <Card.Body className="thirdGroup-Cardbody">
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCarDText">Jeans</Card.Text>
              <Card.Text className="thirdGroupCardDollar">210.00 $</Card.Text>

              <Button variant="outline-success" className="THshop-now ">
                <Link className="THshop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* ---------------------------fifth-group---------------------------------------------------- */}

      <Container className="fifth-group">
        <div className="fifth-group-row">
          <div className="TwoPics-cont">
            <div className="FG-img-cont">
              <img alt="" className="fifth-group-img" src={fifth1} />
            </div>
            <div className="FG-img-cont">
              <img alt="" className="fifth-group-img" src={fifth2} />
            </div>
          </div>

          <div className="fifth-group-col2">
            <h1 className="fifth-group-vintage1">Vintage Style</h1>
          </div>
        </div>
        <div className="fifth-group-row">
          <div className="TwoPics-cont">
            <div className="FG-img-cont">
              <img alt="" className="fifth-group-img" src={fifth3} />
            </div>
            <div className="FG-img-cont">
              <img alt="" className="fifth-group-img" src={fifth4} />
            </div>
          </div>
          <div className="fifth-group-col2">
            <div className="fifth-group-vintage2">
              Fashion is not only a kind of appearance, popular may not be
              suitable for you, but according to their own to dress up yourself,
              than can all be Fashionable.
            </div>
          </div>
        </div>
        <div className="fifth-group-row">
          <div className="TwoPics-cont">
            <div className="FG-img-cont">
              <img alt="" className="fifth-group-img" src={fifth5} />
            </div>
            <div className="FG-img-cont">
              <img alt="" className="fifth-group-img" src={fifth6} />
            </div>
          </div>
          <div className="fifth-group-col2">
            <h1 className="fifth-group-vintage1">#LusionTheme</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

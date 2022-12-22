import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/coding-man.jpg";
import img2 from "../../images/programmer-scanning-screen-his-smartwatch-with-smartphone-camera.jpg";
import img3 from "../../images/rear-view-programmer-working-all-night-long.jpg";
import img4 from "../../images/web-design-concept-with-drawings.jpg";

const Home = () => {
  return (
    <Container className="w-full p-1 mb-0 ">
      <h2 className="fw-bold text-center mt-4 text-danger">
        All Programing languages{" "}
      </h2>
      <p className="text-center fw-semibold mt-2 mb-4">
        We are best programmer
      </p>
      <Carousel className="mt-2 ">
        <Carousel.Item className="">
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>PHP</h3>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "500px" }}
            className="d-block w-100 rounded"
            src={img4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>PHP</h3>
            <p className="fw-bold"></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;

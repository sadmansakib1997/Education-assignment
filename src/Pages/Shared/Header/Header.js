import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState("dark");

  const handleToggle = () => {
    if (toggle === "dark") {
      setToggle("light");
    } else {
      setToggle("dark");
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="me-4 fw-bold" as={Link} to={"/"}>
          {" "}
          EDUCATION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="me-4 text-white" as={Link} to={"/"}>
              HOME
            </Nav.Link>
            <Nav.Link className="me-4  text-white" as={Link} to={"/blog"}>
              BLOG
            </Nav.Link>
            <Nav.Link className="me-4  text-white" as={Link} to={"/courses"}>
              COURSES
            </Nav.Link>

            <Nav.Link className="me-4  text-white" as={Link} to={"/faq"}>
              FAQ
            </Nav.Link>
          </Nav>
          <Nav>
            {/* toggle button */}
            <Button
              onClick={handleToggle}
              className="ms-3"
              variant="outline-info"
            >
              {toggle}{" "}
            </Button>
            {user?.uid ? (
              <>
                <Nav.Link className="me-2" onClick={handleLogout}>
                  Logout
                </Nav.Link>

                {user?.photoURL ? (
                  <Image
                    className="mt-2"
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                    title={user?.displayName}
                  ></Image>
                ) : (
                  <FaUserAlt
                    className="text-light mt-3"
                    title={user?.displayName}
                  ></FaUserAlt>
                )}
              </>
            ) : (
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

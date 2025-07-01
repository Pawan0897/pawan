import { Link as ScrollLink } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()

   
  return (
    <>
      {/* ************************************************************************************ */}
      <Navbar expand="lg" className="navbar-expand-md bg-bodyNav">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link className="navbar-brand" to="/">
              M<strong className="bgcolortext">y </strong>Jo
              <strong className="bgcolortext">ur</strong>ne
              <strong className="bgcolortext">y</strong>.
            </Link>
          </Navbar.Brand>
          {/* *********************** */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto mb-2 mb-lg-0">
              {/* ****************************** */}
              <Nav.Link>
                <Link
                  to="/"
                  className={`nav-link bg-navtext ${
                    location.pathname === "/" ? "navborder bgcolortext" : ""
                  }`}
                >
                  Home
                </Link>
              </Nav.Link>
              {/* ******************************  What i do */}
              <Nav.Link>
                <ScrollLink
                  to="what-i-do"
                  smooth={true}
                  duration={1500}
                  onClick={() => navigate("/?scrollTo=what-i-do")  }
                  className={`nav-link  bg-navtext ${
                    location.pathname === "/" ? "" : ""
                  }`}
                >
                  What-i-do
                </ScrollLink>
              </Nav.Link>
              {/* ****************************** Skills */}
              <Nav.Link>
                <ScrollLink
                  to="skill"
                  smooth={true}
                  onClick={() => navigate("/?scrollTo=skill")  }
                  duration={1500}
                  className={`nav-link  bg-navtext ${
                    location.pathname === "/" ? "" : ""
                  }`}
                >
                  Skills
                </ScrollLink>
                
              </Nav.Link>
              {/* ***************************** Projects */}
              <Nav.Link>
                

                <ScrollLink
                  to="project"
                  smooth={true}
                  duration={1500}
                   onClick={() => navigate("/?scrollTo=project")  }
                  className={`nav-link  bg-navtext ${
                    location.pathname === "/" ? "" : ""
                  }`}
                >
                  Projects
                </ScrollLink>
              </Nav.Link>
              {/* ****************************** Task */}

              <Nav.Link>
                <Link className={`nav-link font-medium`}>
                  <Dropdown />
                </Link>
              </Nav.Link>

              {/* ****************************** About me*/}
              <Nav.Link>
               
                <ScrollLink
                  to="about-me"
                  smooth={true}
                  duration={1500}
                   onClick={() => navigate("/?scrollTo=about-me")  }
                  className={`nav-link  bg-navtext ${
                    location.pathname === "/" ? "" : ""
                  }`}
                >
                  about me
                </ScrollLink>
              </Nav.Link>

              {/* ****************************** Contact me */}

              <Nav.Link>
                <ScrollLink
                  to="contact-me"
                  smooth={true}
                  duration={1500}
                   onClick={() => navigate("/?scrollTo=contact-me")  }
                  className={`nav-link  bg-navtext ${
                    location.pathname === "/" ? "" : ""
                  }`}
                >
                  Contact me
                </ScrollLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

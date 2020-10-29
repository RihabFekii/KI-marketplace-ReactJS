
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

import Scrollchor from 'react-scrollchor';


function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand 
            style = {{padding : "5px"}}
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Rihab Feki"
          >
            
            <img src={require("assets/img/logoooo.png")} style={{width:150, marginTop: -5}} alt="cam"/>
          
          </NavbarBrand>
          
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/ki_marktplatz?lang=de"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>


            <NavItem> 
               

              <Scrollchor to="#about-us" className="nav-link" style = {{ padding: "15px", margin: "10px"}}> About Us </Scrollchor> 

              
              </NavItem> 

           


            <NavItem>
              <NavLink
                href="/data-marketplace"
                target="_blank"
              >
                <i className="fa fa-database a-lg"  /> Data Marketplace
              </NavLink>
            </NavItem>

          
           
            <NavItem>
              <NavLink
                href="/ai-marketplace"
                target="_blank"
              >
                <i className="fa fa-cubes" /> AI Marketplace
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                style = {{ backgroundColor : "#d50e31" , borderBottomColor : "#d50e31" , borderColor : "#d50e31" }}
                href="/register-page"
                target="_blank" 
                size="sm"
                
              >
                Register
              </Button>

            </NavItem>

            <NavItem>
              <Button
                style = {{ backgroundColor : "#FFFF" , borderBottomColor : "#d50e31" , borderColor : "#d50e31" , color : "#d50e31"}}
                href="/login-page"
                target="_blank" 
                size="sm"
              >
                Log in
              </Button>

            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

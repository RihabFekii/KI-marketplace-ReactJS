
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://ki-marktplatz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI marketplace 
                </a>
              </li>
              <li>
                <a
                  href="https://ki-marktplatz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data marketplace
                </a>
              </li>
              <li>
                <a
                  href="https://ki-marktplatz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Rihab Feki
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

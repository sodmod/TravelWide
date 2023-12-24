import { Component, ReactNode } from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render(): ReactNode {
    return (
      <>
        <div className="footer">
          <div className="top">
            <div>
              <h1>Travel</h1>
              <p>Choose your favourite destination</p>
            </div>
            <div>
              <Link to="/">
                <i className="fa-brands fa-facebook-square" />
              </Link>
              <Link to="/">
                <i className="fa-brands fa-instagram-square" />
              </Link>
              <Link to="/">
                <i className="fa-brands fa-behance-square" />
              </Link>
              <Link to="/">
                <i className="fa-brands fa-twitter-square" />
              </Link>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h4>Project</h4>
              <Link to="/">Changelog</Link>
              <Link to="/">Status</Link>
              <Link to="/">Licence</Link>
              <Link to="/">All Version</Link>
            </div>
            <div>
              <h4>Community</h4>
              <Link to="/">GitHub</Link>
              <Link to="/">Issues</Link>
              <Link to="/">Project</Link>
              <Link to="/">Twitter</Link>
            </div>
            <div>
              <h4>Help</h4>
              <Link to="/">Support</Link>
              <Link to="/">Troubleshooting</Link>
              <Link to="/">Contact Us</Link>
            </div>
            <div>
              <h4>Others</h4>
              <Link to="/">Terms of Services</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">License</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;

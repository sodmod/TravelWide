import { Component, ReactNode } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "../functions/navbarmenu";

interface NavbarState {
  clicked: boolean;
}

interface NavbarProp {}

class Navbar extends Component<NavbarProp, NavbarState> {
  constructor(props: NavbarProp) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleMenuClick = () => {
    this.setState((preState) => ({
      clicked: !preState.clicked,
    }));
  };

  render(): ReactNode {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Travel</h1>

          <div className="menu-icons" onClick={this.handleMenuClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((items, index) => {
              return (
                <li key={index} onClick={this.handleMenuClick}>
                  <Link to={items?.url} className={items?.classname}>
                    <i className={items?.icon}></i>
                    {items?.title}
                  </Link>
                </li>
              );
            })}
            <button>sign up</button>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;

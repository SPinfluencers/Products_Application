import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom"
import style from '../Components/navbar.css'

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Product Dashboard</h1>
      </div>
      <div className="navbar">
        {/* Link the button to the /add route, when the user clicks on the button */}
          <Link to={"/add"}><button className="button_2" data-cy="add-product-navbar-button">Add Product</button> </Link>
      </div>
    </div>
  );
};

export default Navbar;

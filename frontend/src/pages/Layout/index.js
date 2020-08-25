import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Show Room</button>
        </Link>

        <Link to="/order">
          <button>Pedido</button>
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;

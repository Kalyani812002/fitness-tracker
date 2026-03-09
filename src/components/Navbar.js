import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
  return(

    <nav style={{
      display:"flex",
      gap:"20px",
      padding:"10px",
      background:"#eee"
    }}>

      <Link to="/">Home</Link>
      <Link to="/tracker">Tracker</Link>
      <Link to="/login">Login</Link>

    </nav>

  )
}

export default Navbar;
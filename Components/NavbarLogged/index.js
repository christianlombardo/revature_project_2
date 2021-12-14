import React from "react";
import {Link} from 'react-router-dom';

const NavbarLogged = () => {



    return(
    <div className = "navWrapper">
          <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand">Reconnect</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

          <Link className ="nav-link active" aria-current="page" to = '/MeditationList'>Meditation List</Link>
      <Link className = "nav-link active" aria-current="page" to = '/JournalEntry'>See Journal</Link>

      </div>
    </div>
  </div>
</nav>
</div>
)
}
export default NavbarLogged;
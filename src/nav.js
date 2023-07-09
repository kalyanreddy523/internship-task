import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"


function Nav(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button className="navbar-brand rounded-5 p-2">Enter Dates</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex col-sm-10 col-md-10 col-xl-20 col-xxl-20" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <ul className="navbar-nav me-0 mb-2 mb-lg-0">
        <li className="nav-item">
        <button type="button" class="btn nav-link active border border-dark rounded-5">Filters</button>
        </li>
        <li class="nav-item dropdown">
          <button class="nav-link dropdown-toggle btn border border-dark rounded-5" type="button" data-bs-toggle="dropdown">
            Attractions
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Nav
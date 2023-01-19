import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">ImageAPI</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/favorite">Favorite</NavLink>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/general">General</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/sports">Sports</a>
                </li>
                <li className="nav-item">
                <a className="nav-link"  activeClassName="active" href="/entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/business">Business</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/cricket">Cricket</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active"  href="/nature">Nature</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/animal">Animal</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/mountain">Mountain</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/building">Building</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/plant">Plant</a>
                </li>
            </ul>
          
            </div>
        </div>
        </nav>
    </div>
  )
}

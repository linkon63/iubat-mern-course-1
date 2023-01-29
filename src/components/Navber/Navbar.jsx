import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark text-light navbar-expand-lg">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/home">Home</Link>
                    <Link className="nav-item nav-link active" to="/about">About</Link>
                    <Link className="nav-item nav-link active" to="/info">Info</Link>
                    <Link className="nav-item nav-link active" to="/features">Features</Link>
                </div>
            </div>
        </nav>
    )
}

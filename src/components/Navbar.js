import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Home<span class="sr-only"></span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/aboutme">About Me</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/projects">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/skills">Skills</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contactme">Contact Me</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    )
}

export default Navbar;

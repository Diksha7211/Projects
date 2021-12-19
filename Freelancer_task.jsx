import React from 'react';
import './Freelancer_task.css';
import Cards from './Cards';
import Apply_By from './Apply_By';
import $ from 'jquery';

export default function Freelancer_task() {
    $(document).ready(function () {
        buttonAnimation();
    });

    function buttonAnimation() {
        $('#viewOurWorkButton').animate({
            backgroundColor: '#fff',
            color: '#000'
        }, 1000).animate({
            backgroundColor: '#000',
            color: '#FFF'
        }, 1000, buttonAnimation);

    }
    return (
        <div>

            <div className="container-fluid mainclass m-0 p-0">
                <div className="col-lg-12 mainn  m-0 p-0">
                    <div className="mainactionfield m-0 p-0">
                        {/* <li> */}
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container">
                                <a className="navbar-brand" href="#">Matro</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Sign Up</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Register</a>
                                        </li>
                                    </ul>
                                    {/* <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form> */}
                                </div>
                            </div>
                        </nav>
                        {/* </li> */}
                    </div>
                    <div className="maincontainer">
                        <div className="main">
                            <div className="heading text-center">
                                <div className="head">
                                    <div className="col-lg-6 txt my-3">
                                        <div className="mainheading">
                                            <h1>
                                                Find Your Soulmate Here
                                            </h1>
                                            <button className="btn  mx-1" id="viewOurWorkButton">Register Now!!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  ">
                                <div className="imgg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cards />
            <Apply_By />
        </div >
    )
}

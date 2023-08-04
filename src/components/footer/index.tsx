/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'

const Footer = ({ }) => {
    return (
        <footer>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Marketplace</h5>
                            <ul>
                                <li>
                                    <a href="#">All NFTs</a>
                                </li>
                                <li>
                                    <a href="#">Art</a>
                                </li>
                                <li>
                                    <a href="#">Music</a>
                                </li>
                                <li>
                                    <a href="#">Domain Names</a>
                                </li>
                                <li>
                                    <a href="#">Virtual World</a>
                                </li>
                                <li>
                                    <a href="#">Collectibles</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Resources</h5>
                            <ul>
                                <li>
                                    <a href="#">Help Center</a>
                                </li>
                                <li>
                                    <a href="#">Partners</a>
                                </li>
                                <li>
                                    <a href="#">Suggestions</a>
                                </li>
                                <li>
                                    <a href="#">Discord</a>
                                </li>
                                <li>
                                    <a href="#">Docs</a>
                                </li>
                                <li>
                                    <a href="#">Newsletter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Community</h5>
                            <ul>
                                <li>
                                    <a href="#">Community</a>
                                </li>
                                <li>
                                    <a href="#">Documentation</a>
                                </li>
                                <li>
                                    <a href="#">Brand Assets</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Forum</a>
                                </li>
                                <li>
                                    <a href="#">Mailing List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Newsletter</h5>
                            <p>Signup for our newsletter to get the latest news in your inbox.</p>
                            <form
                                action="https://gigaland.io/blank.php"
                                className="row form-dark"
                                id="form_subscribe"
                                method="post"
                                name="form_subscribe"
                            >
                                <div className="col text-center">
                                    <input
                                        className="form-control"
                                        id="txt_subscribe"
                                        name="txt_subscribe"
                                        placeholder="enter your email"
                                        type="text"
                                    />{" "}
                                    <a href="#" id="btn-subscribe">
                                        <i className="arrow_right bg-color-secondary" />
                                    </a>
                                    <div className="clearfix" />
                                </div>
                            </form>
                            <div className="spacer-10" />
                            <small>Your email is safe with us. We dont spam.</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <a href="04_retro-index.html">
                                        <img
                                            alt=""
                                            className="f-logo"
                                            src="images/logo-retro-light.png"
                                        />
                                        <span className="copy">
                                            © Copyright 2023 - Gigaland by Designesia
                                        </span>
                                    </a>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">
                                        <a href="#">
                                            <i className="fa fa-facebook fa-lg" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter fa-lg" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin fa-lg" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-pinterest fa-lg" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-rss fa-lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer
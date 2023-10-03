/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'

const Footer = ({ }) => {
    return (
        <footer>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Danh mục</h5>
                            <ul>
                                <li>
                                    <a href="#">Áo Free style</a>
                                </li>
                                <li>
                                    <a href="#">Áo đôi</a>
                                </li>
                                <li>
                                    <a href="#">Hoodie</a>
                                </li>
                                <li>
                                    <a href="#">Áo chữ</a>
                                </li>
                                <li>
                                    <a href="#">Áo lớp</a>
                                </li>
                                <li>
                                    <a href="#">Khác</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Thông tin nổi bật</h5>
                            <ul>
                                <li>
                                    <a href="#">Công nghệ in ấn</a>
                                </li>
                                <li>
                                    <a href="#">Chế độ bảo hành</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Thông tin</h5>
                            <ul>
                                <li>
                                    <a href="#">Địa chỉ: Tự nhiên, Thường Tín, Hà Nội</a>
                                </li>
                                <li>
                                    <a href="#">Hotline: 0879434998</a>
                                </li>
                                <li>
                                    <a href="#">Gmail: quangtuan070598@gmail.com</a>
                                </li>
                                <li>
                                    <a href="#">LinkFanPage: http://scarlet.com</a>
                                </li>
                            </ul>
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
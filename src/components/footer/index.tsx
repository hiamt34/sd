/* eslint-disable @next/next/no-img-element */
import { RootState } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Footer = ({ }) => {
    const designerState = useSelector((state: RootState) => state.designer)
    return (
        <footer>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Danh mục</h5>
                            <ul>
                                {
                                    designerState.categories.map((x) =>
                                        <li>
                                            <span>{x}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Thông tin nổi bật</h5>
                            <ul>
                                <li>
                                    <span>Công nghệ in ấn</span>
                                </li>
                                <li>
                                    <span>Chế độ bảo hành</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Thông tin</h5>
                            <ul>
                                <li>
                                    <span>Địa chỉ: Tự nhiên, Thường Tín, Hà Nội</span>
                                </li>
                                <li>
                                    <span>Hotline: 0879434998</span>
                                </li>
                                <li>
                                    <span>Gmail: quangtuan070598@gmail.com</span>
                                </li>
                                <li>
                                    <span>LinkFanPage: http://scarlet.com</span>
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
                                            src="images/SDlogo.png"
                                            height={40}
                                        />
                                        <span className="copy">
                                            © Scarlet Design 2023
                                        </span>
                                    </a>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/profile.php?id=100086752471755">
                                            <i className="fa fa-facebook fa-lg" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram fa-lg" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-telegram fa-lg" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-pinterest fa-lg" />
                                        </a>
                                        <a href="">
                                            <img src='images/SDlogo.png' height={5} className="fa fa-rss fa-lg" />
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
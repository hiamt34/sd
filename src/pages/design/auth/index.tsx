import { navLink } from "@/constants/link.constants"
import CustomerLayout from "@/layouts/customer_layouts"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import DesignerLayout from "@/layouts/designer_layout"
import { LoginDto } from "@/api/inteface/designer.interface"
import { Login } from "@/components/auth/login"
import { Register } from "@/components/auth/register"

const LoginPage = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const [isLogin, SetIsLogin] = useState(true)
    return (
        <DesignerLayout is_login={false}>
            <section
                className="full-height relative"
                data-bgimage="images/background/subheader.jpg"
                data-stellar-background-ratio=".3"

            >
                <div className="overlay-gradient">
                    <div className="center-y relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 text-dark wow fadeInRight" data-wow-delay=".5s">
                                    <div className="xs-hide" >
                                        <div
                                            id="item-carousel-big-type-2"
                                            className="owl-carousel wow fadeIn"
                                        >
                                            <div className="nft_pic style-2">
                                                <a href="04_retro-item-details.html">
                                                    <span className="nft_pic_info">
                                                        <span className="nft_pic_title">The Era of 90s</span>
                                                        <span className="nft_pic_by">Gayle Hicks</span>
                                                    </span>
                                                </a>
                                                <div className="nft_pic_wrap">
                                                    <img
                                                        src="images/mau_ao/bia/anhbia_1.jpg"
                                                        className="lazy img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="nft_pic style-2">
                                                <a href="04_retro-item-details.html">
                                                    <span className="nft_pic_info">
                                                        <span className="nft_pic_title">Live Arts</span>
                                                        <span className="nft_pic_by">Nicholas Daniels</span>
                                                    </span>
                                                </a>
                                                <div className="nft_pic_wrap">
                                                    <img
                                                        src="images/mau_ao/bia/anhbia_2.jpg"
                                                        className="lazy img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="nft_pic style-2">
                                                <a href="04_retro-item-details.html">
                                                    <span className="nft_pic_info">
                                                        <span className="nft_pic_title">Red Ocean</span>
                                                        <span className="nft_pic_by">Monica Lucas</span>
                                                    </span>
                                                </a>
                                                <div className="nft_pic_wrap">
                                                    <img
                                                        src="images/mau_ao/bia/anhbia_3.jpg"
                                                        className="lazy img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-arrow-left">
                                            <i className="fa fa-angle-left" />
                                        </div>
                                        <div className="d-arrow-right">
                                            <i className="fa fa-angle-right" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
                                    <div className="box-rounded padding40" data-bgcolor="#ffffff">
                                        <h3 className="mb10">{!isLogin ? navLink.register.text : navLink.login.text}</h3>
                                        <p>
                                            {isLogin ? 'Bạn chưa có tài khoản designer? ' : 'Bạn đã có tài khoản designer? '}
                                            <Link href={{}} onClick={() => SetIsLogin(!isLogin)}>
                                                {isLogin ? navLink.register.text : navLink.login.text}
                                                <span />
                                            </Link>
                                            .
                                        </p>
                                        {
                                            isLogin ? <Login /> : <Register />
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DesignerLayout>
    )
}

export default LoginPage
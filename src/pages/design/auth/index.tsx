import { Confirm } from "@/components/auth/confirm"
import { ForgotPass } from "@/components/auth/forgotPass"
import { Login } from "@/components/auth/login"
import { Register } from "@/components/auth/register"
import { navLink } from "@/constants/link.constants"
import DesignerLayout from "@/layouts/designer_layout"
import { RootState } from "@/store/store"
import Link from "next/link"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
interface State {
    page: string
    email: string
    password: string
}

const LoginPage = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const [state, SetIsLogin] = useState<State>({
        page: "login",
        email: "",
        password: ""
    })
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
                                        <h3 className="mb10" style={{ display: 'flex', justifyContent: 'center' }}>{state.email === "login" ? "ĐĂNG NHẬP" :
                                            state.page === "register" ? "ĐẮNG KÍ" :
                                                state.page === "forgortPassWord" ? "QUÊN MẬT KHẨU" :
                                                    state.page === "confirm" ? "XÁC THỰC OTP" : null
                                        }</h3>
                                        <p>
                                            {state.page === "login" ? 'Bạn chưa có tài khoản designer? ' :
                                                state.page === "register" ? 'Bạn đã có tài khoản designer? ' :
                                                    state.page === "forgortPassWord" ? "Quên mật khẩu. " :
                                                        state.page === "confirm" ? "Vui lòng kiểm tra mail" : null
                                            }
                                            <Link href={{}} onClick={() => {
                                                if (state.page === "login") {
                                                    SetIsLogin({ ...state, page: 'register' })
                                                    return
                                                }
                                                if (state.page === 'register') {
                                                    SetIsLogin({ ...state, page: 'login' })
                                                }
                                                if (state.page === "forgortPassWord") {
                                                    SetIsLogin({ ...state, page: 'login' })
                                                }

                                            }}>
                                                {state.page === "login" ? navLink.register.text
                                                    : state.page === "register" ? navLink.login.text :
                                                        state.page === "forgortPassWord" ? navLink.login.text : null

                                                }
                                                <span />
                                            </Link>
                                            .
                                        </p>
                                        {
                                            state.page === "login" ? <Login onforgotPass={() => SetIsLogin({ ...state, page: 'forgortPassWord' })} /> :
                                                state.page === "register" ? <Register onConfirm={(email: string, password: string) => SetIsLogin({ email: email, password: password, page: 'confirm' })} /> :
                                                    state.page === "forgortPassWord" ? <ForgotPass /> :
                                                        state.page === "confirm" ? <Confirm password={state.password} email={state.email} onBack={() => SetIsLogin({ ...state, page: 'register' })} /> : null

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
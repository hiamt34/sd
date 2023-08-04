import { navLink } from "@/constants/link.constants"
import ClientLayout from "@/layouts"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { Login } from "../../components/auth/login"
import { Register } from "../../components/auth/register"

const LoginPage = () => {
    const [isLogin, SetIsLogin] = useState(true)
    return (
        <ClientLayout>
            <section
                className="full-height relative no-bottom vertical-center"
                data-bgimage="url(images/background/16.jpg) top"
                data-stellar-background-ratio=".5"
            >
                <div className="overlay-gradient t50">
                    <div className="center-y relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 offset-lg-4 wow fadeIn" data-wow-delay=".5s">
                                    <div className="box-retro padding40">
                                        <h3 className="mb10">{!isLogin ? navLink.register.text : navLink.login.text}</h3>
                                        <p>
                                            {isLogin ? 'Bạn chưa có tài khoản designer? ' : 'Bạn đã có tài khoản designer? '}
                                            <Link href={{ pathname: navLink.login.path }} onClick={() => SetIsLogin(!isLogin)}>
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
        </ClientLayout>
    )
}

export default LoginPage
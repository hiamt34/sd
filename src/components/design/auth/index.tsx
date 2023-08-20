import { navLink } from "@/constants/link.constants"
import CustomerLayout from "@/layouts/customer_layouts"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { Login } from "../../auth/login"
import { Register } from "../../auth/register"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import DesignerLayout from "@/layouts/designer_layout"

const LoginPage = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const [isLogin, SetIsLogin] = useState(true)
    return (
        <DesignerLayout is_login={true}>
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
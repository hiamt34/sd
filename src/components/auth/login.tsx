
import { designerAction } from "@/store/designer/designerSlice"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { useRef } from 'react';
import { ApiService } from "@/services/api/http"
import CircularProgress from '@mui/material/CircularProgress';
import { Button, ButtonBase } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
import { localStorageService } from "@/services/storage"
interface Login {
    email: string
    password: string
    validEmail: string
    validPassword: string
    validLogin: string
    on_loading: boolean
}
interface Props {
    onforgotPass: () => void
}
export const Login = (prop: Props) => {
    const [state, setState] = useState<Login>({
        email: "",
        password: "",
        validEmail: "",
        validPassword: "",
        validLogin: "",
        on_loading: false
    })
    const refToDesignPage = useRef<HTMLInputElement | null>(null);
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    const onLogin = async () => {
        if (state.email === "") {
            setState({
                ...state,
                validEmail: "*Vui lòng nhập email"
            })
            return
        }
        if (state.password === "") {
            setState({
                ...state,
                validPassword: "*Vui lòng nhập password"
            })
            return
        }
        if (!reg.test(state.email)) {
            setState({
                ...state,
                validEmail: "*Vui lòng nhập đúng email"
            })
            return
        }
        setState({
            ...state,
            on_loading: true
        })
        await new Promise((res, rej) => {
            setTimeout(() => {
                res('okd')
            }, 1000)
        })
        const response = await ApiService.login({
            email: state.email,
            password: state.password
        })
        if (response.status === 200) {
            localStorageService.setStorage(response.data.payload.token, response.data.payload.user.id)
            ApiService.setAuthorization(response.data.payload.token)
            ApiService.getProduct({ page: 1, pageSize: 20, filter: [`user_id=${response.data.payload.user.id}`] }).then((response2) => {
                dispatch(designerAction.loginInit({ designer: response.data.payload.user, categories: undefined, product: response2?.data?.payload?.data }))

            })

            window.location.href = '/design'
            // refToDesignPage.current?.click()
            return
        }


        if (response.data?.errors.includes('incorrectPassword') || response.data?.errors.includes("emailNotExists")) {
            setState({
                ...state,
                validLogin: "*Tài khoản hoặc mật khẩu không đúng",
                on_loading: false
            })
            return
        }
        setState({
            ...state,
            validLogin: "*Hệ thống đang bảo trì, vui lòng thử lại sau ít phút",
            on_loading: false
        })


    }
    return (
        <form
            name="contactForm"
            id="contact_form"
            className="form-border"
        >

            <div className="field-set">
                <h6>Tài khoản</h6>
                <input
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={state.email}
                    style={{ borderColor: `${state.validEmail === "" ? "none" : "red"}`, marginBottom: 0 }}
                    onChange={(event) => setState({ ...state, email: event.currentTarget.value, validEmail: "", validPassword: "", validLogin: "" })}
                    className="form-control"
                    placeholder="Eg. designer@gmail.com"
                />
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validEmail}</div>
            </div>
            <div className="field-set">
                <h6 style={{ marginTop: 10 }}>Mật khẩu</h6>
                <input
                    type="password"
                    name="password"
                    id="password"
                    defaultValue={state.password}
                    style={{ borderColor: `${state.validPassword === "" ? "none" : "red"}`, marginBottom: 0 }}
                    onChange={(event) => {
                        setState({ ...state, password: event.currentTarget.value, validEmail: "", validPassword: "", validLogin: '' })
                    }}
                    className="form-control"
                    placeholder="Password..."
                />

                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validPassword}</div>
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validLogin}</div>
                <Link href='' onClick={() => prop.onforgotPass()} style={{ marginRight: 10, marginTop: 20 }}>Quên mật khẩu?</Link>
            </div>

            <div className="field-set" style={{ marginTop: 20 }}>
                <ButtonBase
                    style={{ backgroundColor: 'black' }}
                    onClick={() => onLogin()
                    }
                >
                    Đăng nhập
                </ButtonBase>
                {state.on_loading &&
                    <LinearProgress
                        color='info'
                        style={{}}
                    />
                }
            </div>
            <div className="clearfix" />
            <div className="spacer-single" />
            <Link href='/design' ref={refToDesignPage as any} />
        </form >
    )
}


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
interface Login {
    email: string
    valid: string
    on_loading: boolean
}

export const ForgotPass = () => {
    const [state, setState] = useState<Login>({
        email: "john.doe@example.com",
        valid: "",
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
                valid: "*Vui lòng nhập email"
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
        // const response = await ApiService.login({
        //     email: state.email,
        //     password: state.password
        // })
        // console.log('res', response.data);
        // if (response.status === 200) {


        //     refToDesignPage.current?.click()
        //     dispatch(designerAction.login(response.data))
        //     return
        // }

        // if (response.data?.errors?.email || response.data?.errors?.password) {
        //     setState({
        //         ...state,
        //         validLogin: "*Tài khoản hoặc mật khẩu không đúng",
        //         on_loading: false
        //     })
        //     return
        // }
        // setState({
        //     ...state,
        //     validLogin: "*Hệ thống đang bảo trì, vui lòng thử lại sau ít phút",
        //     on_loading: false
        // })


    }
    return (
        <form
            name="contactForm"
            id="contact_form"
            className="form-border"
        >

            <div className="field-set">
                <h6>Mail</h6>
                <input
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={state.email}
                    style={{ borderColor: `${state.valid === "" ? "" : "red"}`, margin: 0, }}
                    onChange={(event) => setState({ ...state, email: event.currentTarget.value, valid: "" })}
                    className="form-control"
                    placeholder="Eg. designer@gmail.com"
                />
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.valid}</div>
            </div>

            <div className="field-set" style={{ marginTop: 20 }}>
                <ButtonBase
                    onClick={() => onLogin()
                    }
                >
                    Quên mật khẩu
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

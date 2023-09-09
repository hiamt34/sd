
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
    on_success: boolean
}
interface Props {
    onBack: () => void
}

export const ForgotPass = (prop: Props) => {
    const [state, setState] = useState<Login>({
        email: "",
        valid: "",
        on_loading: false,
        on_success: false
    })
    const refToDesignPage = useRef<HTMLInputElement | null>(null);
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    const onConfirm = async () => {
        setState({
            ...state,
            on_loading: true
        })
        if (state.email === "") {
            setState({
                ...state,
                valid: "*Vui lòng nhập email"
            })
            return
        }
        ApiService.forgotPassword({ email: state.email }).then((response) => {
            if (response.status === 200) {
                setState({
                    ...state,
                    on_loading: false,
                    on_success: true
                })
            }

        })




    }
    return (
        <form
            name="contactForm"
            id="contact_form"
            className="form-border"
        >
            {
                !state.on_success ?
                    <>
                        <div className="field-set">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                defaultValue={state.email}
                                style={{ borderColor: `${state.valid === "" ? "" : "red"}`, margin: 0 }}
                                onChange={(event) => setState({ ...state, email: event.currentTarget.value, valid: "" })}
                                className="form-control"
                                placeholder="Nhập địa chỉ mail của bạn"
                            />
                            <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.valid}</div>
                        </div>
                        <div className="field-set" style={{ marginTop: 5 }}>
                            <Link href='' onClick={() => prop.onBack()} style={{ marginLeft: 5 }}>Quay lại</Link>

                        </div>
                        <div className="field-set" style={{ marginTop: 20 }}>
                            <ButtonBase
                                onClick={() => onConfirm()
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
                    </> :
                    <>
                        <div className="field-set" style={{ marginTop: 5 }}>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                defaultValue={state.email}
                                style={{ borderColor: `${state.valid === "" ? "" : "red"}`, margin: 0 }}
                                onChange={(event) => setState({ ...state, email: event.currentTarget.value, valid: "" })}
                                className="form-control"
                                placeholder="Nhập địa chỉ mail của bạn"
                            />
                            <p>Vui lòng kiểm tra mail</p>

                        </div>
                        <div className="field-set" style={{ marginTop: 20 }}>
                            <ButtonBase
                                onClick={() => prop.onBack()
                                }
                            >
                                Quay lại đăng nhập
                            </ButtonBase>

                        </div>
                        <div className="clearfix" />
                        <div className="spacer-single" />

                    </>
            }

        </form >
    )
}

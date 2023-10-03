
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
import OtpInput from 'react18-input-otp';
interface Login {
    otp: string
    validOTP: string
    on_loading: boolean
}
interface Props {
    onBack: () => void
    email: string
    password: string
}

export const Confirm = (props: Props) => {
    const [state, setState] = useState<Login>({
        otp: "",
        validOTP: "",
        on_loading: false
    })

    const refToDesignPage = useRef<HTMLInputElement | null>(null);
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    const onSendOTP = async () => {
        setState({
            ...state,
            on_loading: true
        })
        if (otp.length !== 6) {
            setState({
                ...state,
                validOTP: "Vui lòng nhập đủ OTP"
            })
            return
        }
        const confirmEmail = await ApiService.confirmEmail({ email: props.email, code: otp })
        if (confirmEmail.status === 200) {
            setState({
                ...state,
                on_loading: false
            })
            const designerLogin = await ApiService.login({ email: props.email, password: props.password })
            if (designerLogin.status === 200) {
                refToDesignPage.current?.click()
                dispatch(designerAction.login(designerLogin.data.payload))
            }
            return
        }
        if (confirmEmail.data?.errors.includes("codeInvalid")) {
            setState({
                ...state,
                validOTP: '*Mã otp sai, vui lòng kiểm tra lại'
            })
            setOtp("")
            return
        }
        setState({
            ...state,
            validOTP: "*Hệ thống đang bảo trì, vui lòng thử lại sau ít phút",
            on_loading: false
        })

    }
    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp: any) => {
        setOtp(enteredOtp);
        setState({
            ...state,
            validOTP: ""
        })
    };

    return (
        <form
            name="contactForm"
            id="contact_form"
            className="form-border"
        >
            <div className="field-set"  >

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <OtpInput isInputNum value={otp} inputProps={<input></input>} onChange={handleChange} numInputs={6} separator={<span style={{ margin: 5 }}>-</span>} />
                </div>
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validOTP}</div>
                <ButtonBase
                    onClick={() => onSendOTP()
                    }
                    style={{ marginTop: 10, backgroundColor: 'black' }}
                >
                    Xác thực
                </ButtonBase>
                {state.on_loading &&
                    <LinearProgress
                        color='info'
                        style={{}}
                    />
                }
            </div>
            <div className="field-set" style={{ marginTop: 5 }}>
                <Link href='' onClick={() => props.onBack()} style={{ marginLeft: 5 }}>Quay lại</Link>

            </div>
            <div className="clearfix" />
            <div className="spacer-single" />
            <Link href='/design' ref={refToDesignPage as any} />

        </form >
    )
}

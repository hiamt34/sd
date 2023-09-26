import { ApiService } from '@/services/api/http'
import { designerAction } from '@/store/designer/designerSlice'
import { RootState } from '@/store/store'
import { ButtonBase, LinearProgress } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface State {
    email: string
    password: string
    confirmPassword: string
    validEmail: string
    validPassword: string
    validConfirmPass: string
    validRegister: string
    validFistName: string
    firstName: string
    on_loading: boolean
}

interface Props {
    onConfirm: (email: string, password: string) => void
}
export const Register = (pros: Props) => {
    const [state, setState] = useState<State>({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: '',
        validEmail: "",
        validPassword: "",
        validConfirmPass: "",
        validRegister: "",
        validFistName: "",
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
        if (!reg.test(state.email)) {
            setState({
                ...state,
                validEmail: "*Vui lòng nhập đúng email"
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
        if (state.password.length < 6) {
            setState({
                ...state,
                validPassword: "*Password tối thiểu 6 kí tự"
            })
            return
        }
        if (state.confirmPassword === "") {
            setState({
                ...state,
                validConfirmPass: "*Vui lòng nhập xác nhận lại mật khẩu"
            })
            return
        }
        if (state.confirmPassword !== state.password) {
            setState({
                ...state,
                validConfirmPass: "*Mật khẩu xác nhận không đúng",
                confirmPassword: ""
            })
            return
        }
        if (state.firstName === "") {
            setState({
                ...state,
                validFistName: "Vui lòng nhập tên của bạn",
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
        const response = await ApiService.register({
            email: state.email,
            password: state.password,
            firstName: state.firstName
        })
        if (response.status === 201) {

            pros.onConfirm(state.email, state.password)
            return
        }

        if (response.data?.errors?.includes('emailAlreadyExists')) {
            setState({
                ...state,
                validEmail: "*Tài khoản này đã tồn tại",
                on_loading: false
            })
            return
        }
        setState({
            ...state,
            validRegister: "*Hệ thống đang bảo trì, vui lòng thử lại sau ít phút",
            on_loading: false
        })

    }
    return (
        <form
            name="contactForm"
            id="contact_form"
            className="form-border"
        >
            <div className="field-set" >

                <h6>Tài khoản</h6>
                <input
                    type="text"
                    name="email"
                    id="email"
                    style={{ borderColor: `${state.validEmail === "" ? "" : "red"}`, margin: 0 }}
                    className="form-control"
                    placeholder="Eg. designer@gmail.com"
                    value={state.email}
                    onChange={(event) => setState({ ...state, email: event.currentTarget.value, validEmail: "", validPassword: "", validRegister: "" })}
                />
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validEmail}</div>
            </div>
            <div className="field-set">
                <h6 style={{ marginTop: 10 }}>Mật khẩu</h6>
                <input
                    type="password"
                    name="c-password"
                    id="c-password"
                    value={state.password}
                    style={{ borderColor: `${state.validPassword === "" ? "" : "red"}`, margin: 0, }}
                    className="form-control"
                    placeholder="Mật khẩu ít nhất 6 kí tự"
                    onChange={(event) => setState({ ...state, password: event.currentTarget.value, validEmail: "", validPassword: "", validConfirmPass: "", confirmPassword: "", validRegister: "" })}
                />
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validPassword}</div>
            </div>
            <div className="field-set">
                <h6 style={{ marginTop: 10 }}>Xác nhận mật khẩu</h6>
                <input
                    type="password"
                    name="compare-password"
                    id="password"
                    value={state.confirmPassword}
                    style={{ borderColor: `${state.validConfirmPass === "" ? "" : "red"}`, margin: 0, }}
                    className="form-control"
                    placeholder="Xác nhận mật khẩu"
                    onChange={(event) => setState({ ...state, confirmPassword: event.currentTarget.value, validEmail: "", validPassword: "", validConfirmPass: "", validRegister: "" })}
                />
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validConfirmPass}</div>
            </div>
            <div className="field-set">
                <h6 style={{ marginTop: 10 }}>Tên Designer</h6>
                <input
                    type="text"
                    value={state.firstName}
                    style={{ borderColor: `${state.validFistName === "" ? "" : "red"}`, margin: 0, }}
                    className="form-control"
                    placeholder="Eg. Nguyễn Văn A"
                    onChange={(event) => setState({ ...state, firstName: event.currentTarget.value, validFistName: "", validEmail: "", validPassword: "", validConfirmPass: "", validRegister: "" })}
                />
                <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validFistName}</div>
            </div>
            <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validRegister}</div>
            <div className="field-set" style={{ marginTop: 20 }}>
                <ButtonBase
                    style={{ backgroundColor: 'black' }}
                    onClick={() => onLogin()
                    }
                >
                    Đăng kí
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
        </form>
    )
}

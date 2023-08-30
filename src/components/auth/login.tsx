import { LoginDto } from "@/api/inteface/designer.interface"
import { designerAction } from "@/store/designer/designerSlice"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { useRef } from 'react';
interface Login {
    email: string
    password: string
    validEmail: string
    validPassword: string
    validLogin: string
}

export const Login = () => {
    const [state, setState] = useState<Login>({
        email: "",
        password: "",
        validEmail: "",
        validPassword: "",
        validLogin: ""
    })
    const refToDesignPage = useRef<HTMLInputElement | null>(null);
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    const onLogin = () => {
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
        refToDesignPage.current?.click()
        dispatch(designerAction.login("oke"))

    }
    return (
        <form
            name="contactForm"
            id="contact_form"
            className="form-border"
        >
            <div className="field-set">
                <input
                    type="text"
                    name="email"
                    id="email"
                    style={{ borderColor: `${state.validEmail === "" ? "" : "red"}`, margin: 0 }}
                    onChange={(event) => setState({ ...state, email: event.currentTarget.value, validEmail: "", validPassword: "" })}
                    className="form-control"
                    placeholder="email"
                />
                <div style={{ color: "red", marginLeft: 3 }}>{state.validEmail}</div>
            </div>
            <div className="field-set">
                <input
                    type="password"
                    name="password"
                    id="password"
                    style={{ borderColor: `${state.validPassword === "" ? "" : "red"}`, marginTop: 20 }}
                    onChange={(event) => {
                        setState({ ...state, password: event.currentTarget.value, validEmail: "", validPassword: "" })
                    }}
                    className="form-control"
                    placeholder="password"
                />
                <div style={{ color: "red", marginLeft: 3 }}>{state.validPassword}</div>
            </div>

            <div className="field-set" style={{ marginTop: 20 }}>
                <input
                    style={{ borderRadius: 5 }}
                    type="button"
                    onClick={() => onLogin()
                    }
                    defaultValue="Đăng nhập"
                    className="btn btn-main btn-fullwidth color-2"
                />
            </div>
            <div className="clearfix" />
            <div className="spacer-single" />
            <Link href='/design' ref={refToDesignPage as any} />
        </form>
    )
}

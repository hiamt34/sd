import { ApiService } from "@/services/api/http"
import { RootState } from "@/store/store"
import { ButtonBase, LinearProgress } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as fs from 'fs'
import { Designer, UpdateDesignerDto } from "@/services/api/inteface/designer.interface"
import { designerAction } from "@/store/designer/designerSlice"
import { AxiosResponse } from "axios"
import Config from "@/config"
interface State {
    name: string
    email: string
    password: string
    newPassword: string
    confirmPass: string
    bio: string

    vaidPassword: string
    validNewPassword: string
    validConfirmPass: string
    validBio: string
    validAvatar: string
    validBanner: string
    validName: string
    avatar: string
    banner: string
    avatarId: string
    bannerId: string
    on_success: string
    on_loading: boolean

    avatarUpdate: any
    bannerUpdate: any

}
export const TapEditProfile = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()

    const [state, setState] = useState<State>({
        name: designerState.designer.firstName,
        email: designerState.designer.email,
        bio: designerState.designer.bio,
        avatar: `${Config.apiDomain}${designerState.designer?.photo ? designerState.designer.photo.path : designerState.designer.photo_avatar_default}`,
        banner: `${Config.apiDomain}${designerState.designer?.banner ? designerState.designer.banner.path : designerState.designer.photo_banner_default}`,
        password: "",
        newPassword: "",
        confirmPass: "",
        avatarId: "",
        bannerId: "",
        validName: "",
        validAvatar: "",
        validBanner: "",
        vaidPassword: "",
        validNewPassword: "",
        validConfirmPass: "",
        validBio: "",
        bannerUpdate: "",
        avatarUpdate: "",
        on_success: "Cập nhật",
        on_loading: false
    })
    const onConFirm = async () => {
        setState({
            ...state,
            on_loading: true,
            on_success: "Đang cập nhật"
        })

        if (state.password.length !== 0 && state.password.length < 6) {
            setState({
                ...state,
                vaidPassword: 'Mật khẩu phải ít nhất 6 kí tự'
            })
            return
        }

        if (state.password.length !== 0) {

            if (state.newPassword !== "" && state.confirmPass === "") {
                setState({
                    ...state,
                    validConfirmPass: 'Vui lòng nhập xác nhận mật khẩu'
                })
                return
            }
            if (state.confirmPass !== state.newPassword) {
                setState({
                    ...state,
                    validConfirmPass: 'Mật khảu xác nhận không chính xác'
                })
                return
            }
            if (state.newPassword.length !== 0 && state.newPassword.length < 6) {
                setState({
                    ...state,
                    validNewPassword: 'Mật khảu mới phải có ít nhất 6 kí tự'
                })
                return
            }
            if (state.newPassword.length !== 0 && state.newPassword === state.password) {
                setState({
                    ...state,
                    validNewPassword: 'Mật khảu mới phải khác mật khẩu cũ'
                })
                return
            }
        }
        if (state.bio.length !== 0 && state.bio.length > 40) {
            setState({
                ...state,
                validBio: 'Bio tối đa 40 kí tự'
            })
            return
        }
        if (state.name === "") {
            setState({
                ...state,
                validName: "Hãy đặt tên của bạn để chúng tôi quảng cáo sản phẩm của bạn tốt hơn"
            })
            return
        }
        if (state.name.length > 30) {
            setState({
                ...state,
                validName: "Không quá 30 kí tự"
            })
            return
        }
        let dataSend: UpdateDesignerDto = {}
        if (state.password !== "" && state.newPassword !== "" && state.confirmPass !== "" && state.confirmPass === state.newPassword && state.password !== state.newPassword) {
            dataSend.oldPassword = state.password
            dataSend.password = state.newPassword
        }
        if (state.avatarId !== "") {
            dataSend.photo = { id: state.avatarId }
        }
        if (state.bannerId !== "") {
            dataSend.banner = { id: state.bannerId }
        }
        if (state.name !== designerState.designer.firstName) {
            dataSend.firstName = state.name
        }
        dataSend.bio = state.bio
        if (state.bannerUpdate !== "") {
            const bannerFrom = new FormData()
            bannerFrom.append('file', state.bannerUpdate)
            const responseUploadBanner = await ApiService.uploadFile(bannerFrom)

            if (responseUploadBanner && responseUploadBanner.data.status === 201) {
                dataSend.banner = { id: responseUploadBanner.data.payload.id }
            } else {
                setState({
                    ...state,
                    validBanner: 'Upload không thành công'
                })

            }
        }
        if (state.avatarUpdate !== "") {
            const avatarFrom = new FormData()
            avatarFrom.append('file', state.avatarUpdate)
            const responseUploadAvatar = await ApiService.uploadFile(avatarFrom)
            if (responseUploadAvatar && responseUploadAvatar.data.status === 201) {
                dataSend.photo = { id: responseUploadAvatar.data.payload.id }
            } else {
                setState({
                    ...state,
                    validAvatar: 'Upload không thành công'
                })
            }

        }

        ApiService.updateDesigner(dataSend).then(async (response) => {
            if (response.data.status === 200) {
                dispatch(designerAction.loginInit(response.data.payload as any))
                setState({
                    ...state,
                    name: response.data.payload.firstName,
                    bio: response.data.payload.bio,
                    avatar: response.data.payload.photo?.path ? `${Config.apiDomain}${response.data.payload.photo?.path}` : `${Config.apiDomain}${response.data.payload.photo_avatar_default}`,
                    banner: response.data.payload.banner?.path ? `${Config.apiDomain}${response.data.payload.banner?.path}` : `${Config.apiDomain}${response.data.payload.photo_banner_default}`,
                    on_loading: false,
                    on_success: "Cập nhật thành công"
                })
                return
            }
            if (response.data.status === 422 && response.data.errors.includes('incorrectOldPassword')) {
                setState({
                    ...state,
                    on_loading: false,
                    on_success: "CậP nhật",
                    vaidPassword: 'Mật khẩu không đúng'
                })
                return
            }

        })
    }
    const handleSeletctFileBanner = (event: any) => {
        setState({
            ...state,
            validBanner: ''
        })
        const file = event.target.files[0];
        const formData = new FormData()
        formData.append('file', file)
        if (!file) {
            return
        }
        const fileExtension = file.name.split('.').pop().toLowerCase()
        if (fileExtension !== 'png' && fileExtension !== 'jpg') {
            setState({
                ...state,
                validBanner: 'Vui lòng chọn file định dạng là png,jpg'
            })
            return
        }
        setState({
            ...state,
            banner: URL.createObjectURL(file),
            bannerUpdate: file
        })

    }
    const handleSeletctFileAvatar = (event: any) => {
        setState({
            ...state,
            validAvatar: '',
            validBanner: ""
        })
        const file = event.target.files[0];
        if (!file) {
            return
        }
        const formData = new FormData()
        formData.append('file', file)
        const fileExtension = file.name.split('.').pop().toLowerCase()
        console.log(fileExtension)
        if (fileExtension !== 'png' && fileExtension !== 'jpg') {
            setState({
                ...state,
                validAvatar: 'Vui lòng chọn file định dạng là png,jpg'
            })
            return
        }
        setState({
            ...state,
            avatar: URL.createObjectURL(file),
            avatarUpdate: file
        })

    }
    return (
        <div className="tab-1">
            <div className="row wow fadeIn">
                <div className="col-lg-8 mb-sm-20">
                    <div className="field-set">
                        <h6>Tên Designer</h6>
                        <input
                            type="text"
                            name="username"
                            style={{ marginBottom: 0 }}
                            value={state.name}
                            onChange={(event) => setState({ ...state, name: event.currentTarget.value, validName: "" })}
                            className="form-control"
                        />
                        <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validName}</div>
                        <h6 style={{ marginTop: 20 }}>Tài khoản</h6>
                        <input
                            type="text"
                            name="username"
                            style={{ marginBottom: 0 }}
                            value={state.email}
                            onChange={() => { }}
                            className="form-control"
                            placeholder="Enter username"
                        />

                        <h6 style={{ marginTop: 20 }}>
                            <i className="fa" /> Mật khẩu cũ
                        </h6>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            style={{ marginBottom: 0 }}
                            onChange={(event) => setState({ ...state, password: event.currentTarget.value, vaidPassword: "", validConfirmPass: "", validNewPassword: "" })}
                            value={state.password}
                        />
                        <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.vaidPassword}</div>
                        <h6 style={{ marginTop: 20 }}>
                            <i className="fa" /> Mật khẩu mới
                        </h6>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            style={{ marginBottom: 0 }}
                            onChange={(event) => setState({ ...state, newPassword: event.currentTarget.value, validConfirmPass: "", validNewPassword: "" })}
                            value={state.newPassword}
                        />
                        <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validNewPassword}</div>
                        <h6 style={{ marginTop: 20 }}>
                            <i className="fa" /> Xác nhận mật khẩu mới
                        </h6>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            style={{ marginBottom: 0 }}
                            onChange={(event) => setState({ ...state, confirmPass: event.currentTarget.value, validConfirmPass: "" })}
                            value={state.confirmPass}
                        />
                        <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validConfirmPass}</div>
                        <h6 style={{ marginTop: 20 }}><i className="fa" /> Bio</h6>
                        <input
                            type="text"
                            name="email_address"
                            className="form-control"
                            style={{ marginBottom: 0 }}
                            onChange={(event) => setState({ ...state, bio: event.currentTarget.value, validBio: "" })}
                            value={state.bio}
                        />
                        <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validBio}</div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 50 }}>

                        <div className="field-set" style={{ width: '30%' }}>
                            <ButtonBase
                                style={{ borderRadius: 5, backgroundColor: 'black' }}
                                onClick={() => onConFirm()}
                            > {state.on_success}</ButtonBase>
                            {state.on_loading &&
                                <LinearProgress
                                    color='info'
                                    style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                />
                            }
                        </div>
                        <div className="field-set" style={{ width: '30%', marginLeft: 20 }}>
                            <Link href='/design'>
                                <ButtonBase
                                    style={{ borderRadius: 5, backgroundColor: 'black' }}
                                > Quay lại</ButtonBase>
                            </Link>


                        </div>

                    </div>

                </div>
                <div id="sidebar" className="col-lg-4">
                    <h5>
                        Avatar
                    </h5>

                    <div className="profile_avatar">
                        <img
                            src={state.avatar}
                            alt=""
                            style={{ height: '150px', width: '150px' }}

                        />
                        <i id="click_avatar_img" className="fa fa-edit"></i>

                    </div>
                    <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validAvatar}</div>
                    <input type="file" id="upload_profile_img" />
                    <div className="spacer-30" />
                    <h5>
                        Profile banner
                    </h5>
                    <div className="profile_avatar" style={{}}>
                        <img
                            src={state.banner}
                            id=""
                            className=""
                            alt=""
                            style={{ borderRadius: 10, height: '150px', width: '200px' }}
                        />
                        <i id="click_banner_img" className="fa fa-edit" style={{ marginLeft: 150 }}></i>

                    </div>
                    <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validBanner}</div>
                    <input type="file" id="upload_banner_img" onChange={(event) => {
                        handleSeletctFileBanner(event)
                    }} />
                    <input type="file" id="upload_avatar_img" onChange={(event) => handleSeletctFileAvatar(event)} />
                </div>
            </div>
        </div>
    )
}
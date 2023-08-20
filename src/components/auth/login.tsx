import { designerAction } from "@/store/designer/designerSlice"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"

export const Login = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
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
                    className="form-control"
                    placeholder="username"
                />
            </div>
            <div className="field-set">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="password"
                />
            </div>
            <div className="field-set">
                <input
                    style={{ borderRadius: 10 }}
                    type="button"
                    onClick={() => dispatch(designerAction.login("oke"))}
                    defaultValue="Đăng nhập"
                    className="btn btn-main btn-fullwidth color-2"
                />
            </div>
            <div className="clearfix" />
            <div className="spacer-single" />
        </form>
    )
}

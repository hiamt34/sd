import { TapEditProfile } from "@/components/design/edit-profile/tap-edit"
import CustomerLayout from "@/layouts/customer_layouts"
import DesignerLayout from "@/layouts/designer_layout"
import { RootState } from "@/store/store"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const EditProfilePage = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    return (
        <>
            {
                designerState.is_login === false ?
                    <DesignerLayout is_login={true}>
                        <Link href='/design' style={{ height: '100%', display: 'flex', justifyContent: 'center' }} >
                            <section aria-label="section">
                                <div className="container">
                                    <h4>404. Please Login</h4>
                                </div>
                            </section>
                        </Link>
                    </DesignerLayout>
                    :
                    <DesignerLayout is_login={false} type_class="no-bottom no-top" >
                        <br />
                        <section id="section-main" aria-label="section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <form
                                            id="form-create-item"
                                            className="form-border"
                                        >
                                            <div className="de_tab tab_simple">
                                                <ul className="de_nav">
                                                    <li className="active">
                                                        <span>
                                                            <i className="fa fa-user" />
                                                            Thông tin cá nhân
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div className="de_tab_content">
                                                    <TapEditProfile />
                                                </div>
                                            </div>
                                            <div className="spacer-30" />
                                            <input
                                                type="button"
                                                id="submit"
                                                className="btn-main"
                                                defaultValue="Hoàn thành"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </DesignerLayout>
            }


        </>

    )
}
export default EditProfilePage
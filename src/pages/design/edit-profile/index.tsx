import { TapEditProfile } from "@/components/design/edit-profile/tap-edit"
import CustomerLayout from "@/layouts/customer_layouts"
import DesignerLayout from "@/layouts/designer_layout"
import { RootState } from "@/store/store"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { Box, ButtonBase, CircularProgress, Icon, LinearProgress, Pagination } from "@mui/material";
const EditProfilePage = () => {
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    return (
        <>
            {
                designerState.loading_app &&
                <DesignerLayout is_login={false}>
                    <Link href='/design/auth' style={{ height: '100%', display: 'flex', justifyContent: 'center' }} >
                        <section aria-label="section" style={{ height: '100%' }}>
                            <div className="container" >
                                <div style={{ minHeight: '650px', justifyItems: 'center' }}>
                                    <h2>Welcome to Scarlet</h2>
                                    <LinearProgress
                                        color='info'
                                        style={{}}
                                    />
                                </div>

                            </div>
                        </section>
                    </Link>
                </DesignerLayout>
            }
            {
                !designerState.loading_app && designerState.is_login === false ?
                    <DesignerLayout is_login={false}>
                        <Link href='/design/auth' style={{ height: '100%', display: 'flex', justifyContent: 'center' }} >
                            <section aria-label="section" style={{ height: '100%' }} >
                                <div className="container">
                                    <div style={{ minHeight: '650px' }} >
                                        <h3>Please Login. CLick here!</h3>

                                    </div>

                                </div>
                            </section>
                        </Link>
                    </DesignerLayout > :
                    !designerState.loading_app && designerState.is_login === true ?
                        <DesignerLayout is_login={false} type_class="no-bottom no-top " >
                            <br />
                            <section id="section-main" aria-label="section">
                                <div className="container full-height" >
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


                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </DesignerLayout> : null
            }
        </>

    )
}
export default EditProfilePage
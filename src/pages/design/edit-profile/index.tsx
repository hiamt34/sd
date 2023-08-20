import { TapEditProfile } from "@/components/design/edit-profile/tap-edit"
import CustomerLayout from "@/layouts/customer_layouts"

const EditProfilePage = () => {

    return (
        <CustomerLayout type_class="no-bottom no-top" >
            <>
                <section id="subheader">
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1>Cập nhật thông tin cá nhân</h1>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* section close */}
                {/* section begin */}
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
                                            <li>
                                                <span>
                                                    <i className="fa fa-exclamation-circle" />
                                                    Cài đặt nhận thông báo(Coming soon)
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
            </>

        </CustomerLayout>
    )
}
export default EditProfilePage
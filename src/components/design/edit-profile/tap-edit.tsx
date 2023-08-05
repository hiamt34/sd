export const TapEditProfile = () => {
    return (
        <div className="tab-1">
            <div className="row wow fadeIn">
                <div className="col-lg-8 mb-sm-20">
                    <div className="field-set">
                        <h5>Username</h5>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            placeholder="Enter username"
                        />
                        <div className="spacer-20" />

                        <div className="spacer-20" />
                        <h5>Bio</h5>
                        <textarea
                            name="bio"
                            id="bio"
                            className="form-control"
                            placeholder="Tell the world who you are!"
                            defaultValue={""}
                        />
                        <div className="spacer-20" />
                        <h5><i className="fa fa-google" /> Gmail</h5>
                        <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            className="form-control"
                            placeholder="Enter gmail"
                        />
                        <div className="spacer-20" />
                        <h5>
                            <i className="fa fa-phone" /> Số điện thoại
                        </h5>
                        <input
                            type="text"
                            name="your_site"
                            id="your_site"
                            className="form-control"
                            placeholder="Enter phone number"
                        />
                        <div className="spacer-20" />
                        <h5>
                            <i className="fa fa-key" /> Mật khẩu mới
                        </h5>
                        <input
                            type="password"
                            name="password"
                            id="twitter_usernam"
                            className="form-control"
                            placeholder="Enter Password"
                        />
                        <div className="spacer-20" />
                        <h5>
                            <i className="fa fa-key" /> Nhập lại mật khẩu
                        </h5>
                        <input
                            type="password"
                            name="instagram_username"
                            id="instagram_username"
                            className="form-control"
                            placeholder="Enter Password compare"
                        />
                    </div>
                </div>
                <div id="sidebar" className="col-lg-4">
                    <h5>
                        Profile image{" "}
                        <i
                            className="fa fa-info-circle id-color-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Recommend 400 x 400. Max size: 50MB. Click the image to upload."
                        />
                    </h5>
                    <img
                        src="images/author_single/author_thumbnail.jpg"
                        id="click_profile_img"
                        className="d-profile-img-edit img-fluid"
                        alt=""
                    />
                    <input type="file" id="upload_profile_img" />
                    <div className="spacer-30" />
                    <h5>
                        Profile banner{" "}
                        <i
                            className="fa fa-info-circle id-color-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Recommend 1500 x 500. Max size: 50MB. Click the image to upload."
                        />
                    </h5>
                    <img
                        src="images/author_single/author_banner.jpg"
                        id="click_banner_img"
                        className="d-banner-img-edit img-fluid"
                        alt=""
                    />
                    <input type="file" id="upload_banner_img" />
                </div>
            </div>
        </div>
    )
}
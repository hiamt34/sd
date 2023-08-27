export const TapEditProfile = () => {
    return (
        <div className="tab-1">
            <div className="row wow fadeIn">
                <div className="col-lg-8 mb-sm-20">
                    <div className="field-set">
                        <h6>Username</h6>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            placeholder="Enter username"
                        />
                        <h6>
                            <i className="fa" /> Password
                        </h6>
                        <input
                            type="password"
                            name="password"
                            id="twitter_usernam"
                            className="form-control"
                            placeholder="Enter Password"
                        />
                        <h6>
                            <i className="fa" /> Nhập lại mật khẩu
                        </h6>
                        <input
                            type="password"
                            name="instagram_username"
                            id="instagram_username"
                            className="form-control"
                            placeholder="Enter Password compare"
                        />
                        <h6><i className="fa" /> Gmail</h6>
                        <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            className="form-control"
                            placeholder="Enter gmail"
                        />
                        <h6>
                            <i className="fa" /> Số điện thoại
                        </h6>
                        <input
                            type="text"
                            name="your_site"
                            id="your_site"
                            className="form-control"
                            placeholder="Enter phone number"
                        />


                    </div>
                </div>
                <div id="sidebar" className="col-lg-4">
                    <h5>
                        Avatar
                    </h5>

                    <div className="profile_avatar">
                        <img
                            src="images/author/author-2.jpg"
                            alt=""
                        />
                        <i id="click_avatar_img" className="fa fa-edit"></i>
                    </div>
                    <input type="file" id="upload_profile_img" />
                    <div className="spacer-30" />
                    <h5>
                        Profile banner
                    </h5>
                    <div className="profile_avatar" style={{}}>
                        <img
                            src="images/author_single/author_banner.jpg"
                            id=""
                            className=""
                            alt=""
                            style={{ borderRadius: 10, height: '150px', width: '200px' }}
                        />
                        <i id="click_banner_img" className="fa fa-edit" style={{ marginLeft: 150 }}></i>

                    </div>

                    <input type="file" id="upload_banner_img" />
                    <input type="file" id="upload_avatar_img" />
                </div>
            </div>
        </div>
    )
}
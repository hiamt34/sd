
import { CollectionDesign } from "@/components/commons/collection-design";
import { Paginate } from "@/components/commons/paginate";
import { FilterMyProfile } from "@/components/design/my-profile.tsx/filter";
import { TableMyProfile } from "@/components/design/my-profile.tsx/table";
import ClientLayout from "@/layouts";

const MyProfilePage = () => {
  return (
    <ClientLayout type_class="no-bottom">
      <section aria-label="section" className="pt40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d_profile de-flex">
                <div className="de-flex-col">
                  <div className="profile_avatar">
                    <img
                      src="images/author_single/author_thumbnail.jpg"
                      alt=""
                    />
                    <i className="fa fa-check" />
                    <div className="profile_name">
                      <h4>
                        Đinh Thiện Quang
                        <span className="profile_username">Designer số 1 việt nam</span>
                        <span id="wallet" className="profile_wallet">
                          DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
                        </span>
                        <button id="btn_copy" title="Copy Text">
                          Copy
                        </button>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="profile_follow de-flex">
                  <div className="de-flex-col">
                    <div className="profile_follower">1000 sản phẩm</div>
                  </div>
                  <div className="de-flex-col">
                    <a href="#" className="btn-main">
                      Tạo mẫu sản phẩm
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="de_tab tab_simple">
                <ul className="de_nav">
                  <li className="active">
                    <span>Sản phẩm đang bán</span>
                  </li>
                  <li>
                    <span>Sản phẩm đã đăng</span>
                  </li>
                  <li>
                    <span>Biến động số dư tài khoản</span>
                  </li>
                </ul>
                <div className="de_tab_content">
                  <div className="tab-1">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <CollectionDesign showProfileAvatar={false} />
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <CollectionDesign showProfileAvatar={false} />
                      </div>
                    </div>
                  </div>
                  <div className="tab-2">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <CollectionDesign showProfileAvatar={false} />
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <CollectionDesign showProfileAvatar={false} />
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <CollectionDesign showProfileAvatar={false} />
                      </div>
                    </div>
                  </div>

                  <div className="tab-3">
                    <div className="row">
                      <div className="col-md-12">
                        <FilterMyProfile />
                        <TableMyProfile />
                        <div className="spacer-double" />
                        <Paginate />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
};
export default MyProfilePage;

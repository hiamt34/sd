import { Product, User } from "@/components/commons/product"
import DesignerLayout from "@/layouts/designer_layout"
import { useState } from "react"
const createProduct = () => {
      const [arr, setArr] = useState([1, 2])
      return (
            <DesignerLayout is_login={true}>
                  <section aria-label="section">
                        <div className="container">
                              <div className="row wow fadeIn">
                                    <div className="col-lg-7 offset-lg-1">
                                          <form id="form-create-item" className="form-border" method="post" action="https://gigaland.io/email.php">
                                                <div className="field-set">
                                                      <h5 style={{ fontWeight: 1 }}>Upload thiết kế</h5>
                                                      <div className="col-md-12">
                                                            <div className="row">
                                                                  <div className="d-item col-lg-5 col-md-6 col-sm-6 col-xs-12" style={{ margin: 5 }}>
                                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '300px', height: '250px', borderRadius: 20 }}>
                                                                              {/* <img
                                                                                    src='images/mau_ao/ao_don/aodon-1.jpg      '
                                                                                    alt=""
                                                                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                                                              />
                                                                              <input type="file" id="upload_file" /> */}
                                                                              <button
                                                                                    type="button"
                                                                                    className="btn-main"
                                                                                    id="get_file"
                                                                                    style={{ borderRadius: 10 }}
                                                                              >
                                                                                    Tải ảnh mặt trước áo
                                                                              </button>
                                                                              <input type="file" id="upload_file" />

                                                                        </div>

                                                                  </div>
                                                                  <div className="d-item col-lg-5 col-md-6 col-sm-6 col-xs-12" style={{ margin: 5 }}>
                                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '300px', height: '250px', borderRadius: 20 }}>
                                                                              <button
                                                                                    type="button"
                                                                                    className="btn-main"
                                                                                    id="get_file"
                                                                                    style={{ borderRadius: 10 }}
                                                                              >
                                                                                    Tải ảnh mặt trước áo
                                                                              </button>
                                                                              <input type="file" id="upload_file" />

                                                                        </div>

                                                                  </div>
                                                                  <div className="d-item col-lg-5 col-md-6 col-sm-6 col-xs-12" style={{ margin: 5 }}>
                                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '300px', height: '250px', borderRadius: 20 }}>
                                                                              <button
                                                                                    type="button"
                                                                                    className="btn-main"
                                                                                    id="get_file"
                                                                                    style={{ borderRadius: 10 }}
                                                                              >
                                                                                    Tải ảnh mặt trước áo
                                                                              </button>
                                                                              <input type="file" id="upload_file" />

                                                                        </div>

                                                                  </div>
                                                                  <div className="d-item col-lg-5 col-md-6 col-sm-6 col-xs-12" style={{ margin: 5 }}>
                                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '300px', height: '250px', borderRadius: 20 }}>
                                                                              <button
                                                                                    type="button"
                                                                                    className="btn-main"
                                                                                    id="get_file"
                                                                                    style={{ borderRadius: 10 }}
                                                                              >
                                                                                    Tải ảnh mặt trước áo
                                                                              </button>
                                                                              <input type="file" id="upload_file" />

                                                                        </div>

                                                                  </div>


                                                            </div>
                                                      </div>

                                                      <div className="de_tab tab_methods">
                                                            <div className="de_tab_content">

                                                                  <div id="tab_opt_1">
                                                                        <h5 style={{ fontWeight: 1 }}>Tên mẫu thiết kế</h5>
                                                                        <input type="text" name="item_price" id="item_price" className="form-control" placeholder="Ví dụ:Unisex Blackping" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <h5 style={{ fontWeight: 1 }}>Chủ đề</h5>
                                                      <div className="d-item col-lg-12 col-md-6 col-sm-6 col-xs-12" >
                                                            {
                                                                  [1, 2, 3, 4, 5].map((x) =>
                                                                        <div className="btn-main" style={{ marginRight: 10, borderRadius: 10, marginBottom: 10 }}>Anime</div>
                                                                  )
                                                            }
                                                      </div>
                                                      <div id="item_collection" className="dropdown fullwidth mb20">
                                                            <a href="#" className="btn-selector">Chủ đề</a>
                                                            <ul>
                                                                  <li><span>Anime</span></li>
                                                                  <li><span>Áo đôi</span></li>
                                                                  <li><span>Áo lớp</span></li>
                                                                  <li><span>Hoddies</span></li>
                                                                  <li><span>Khác</span></li>
                                                            </ul>
                                                      </div>

                                                      <div className="spacer-20"></div>
                                                      <div className="d-item col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                                            <button
                                                                  type="button"
                                                                  className="btn-main"
                                                            >
                                                                  Tạo Thiết kế
                                                            </button>
                                                      </div>


                                                </div>
                                          </form>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                          <h5 style={{ fontWeight: 1 }}>Preview item</h5>
                                          <Product img="images/mau_ao/ao_don/aodon-1.jpg" type={User.Designer} name="Unisex Blackping" price={180.000} is_show_info={true} is_none_name={false} />
                                    </div>
                              </div>
                        </div>
                  </section>
            </DesignerLayout>
      )
}
export default createProduct
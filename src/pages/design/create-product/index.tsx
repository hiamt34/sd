import { Product, User } from "@/components/commons/product"
import DesignerLayout from "@/layouts/designer_layout"
import { ButtonBase, LinearProgress } from "@mui/material"
import Link from "next/link"
const createProduct = () => {
      return (
            <DesignerLayout is_login={true}>
                  <section aria-label="section" style={{ marginTop: 0, paddingTop: 20 }}>
                        <div className="container">
                              <div className="row wow fadeIn">
                                    <div className="col-lg-7 offset-lg-1">
                                          <form id="form-item" className="form-border" method="post" action="https://gigaland.io/email.php">
                                                <div className="field-set">
                                                      <div className="col-md-12">
                                                            <div className="row">
                                                                  <div className="de_tab tab_methods">


                                                                        <div id="tab_opt_1">
                                                                              <h5 style={{ fontWeight: 1 }}>Tên mẫu thiết kế</h5>
                                                                              <input type="text" name="item_price" id="item_price" className="form-control" placeholder="Ví dụ:Unisex Blackping" style={{ width: '85%' }} />
                                                                        </div>

                                                                  </div>
                                                                  <h5 style={{ fontWeight: 1 }}>Upload thiết kế</h5>

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
                                                      <div style={{ display: 'flex', marginTop: 50 }}>

                                                            <div className="field-set" style={{ width: '30%' }}>
                                                                  <ButtonBase
                                                                        style={{ borderRadius: 5 }}

                                                                  > Tạo thiết kế</ButtonBase>

                                                                  <LinearProgress
                                                                        color='info'
                                                                        style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                                  />

                                                            </div>
                                                            <div className="field-set" style={{ width: '30%', marginLeft: 20 }}>
                                                                  <Link href='/design'>
                                                                        <ButtonBase
                                                                              style={{ borderRadius: 5 }}
                                                                        > Quay lại</ButtonBase>
                                                                  </Link>


                                                            </div>

                                                      </div>


                                                </div>
                                          </form>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                          <h5 style={{ fontWeight: 1 }}>Preview item</h5>
                                          <Product img="images/mau_ao/ao_don/aodon-1.jpg" type={User.Designer} name="Unisex Blackping" price={180.000} is_show_info={true} is_none_name={false} />
                                          <h5 style={{ fontWeight: 1 }}>Category</h5>
                                          <div className="d-item col-lg-12 col-md-6 col-sm-6 col-xs-12" >
                                                {
                                                      [1, 2, 3, 4, 5].map((x) =>
                                                            <div className="btn-main" style={{ marginRight: 10, borderRadius: 10, marginBottom: 10 }}>Anime</div>
                                                      )
                                                }
                                          </div>
                                          <div id="item_collection" className="dropdown fullwidth mb20">
                                                <a href="#" className="btn-selector">Category</a>
                                                <ul>
                                                      <li><span>Anime</span></li>
                                                      <li><span>Áo đôi</span></li>
                                                      <li><span>Áo lớp</span></li>
                                                      <li><span>Hoddies</span></li>
                                                      <li><span>Khác</span></li>
                                                </ul>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </section>
            </DesignerLayout>
      )
}
export default createProduct
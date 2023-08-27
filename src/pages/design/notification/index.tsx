import CustomerLayout from "@/layouts/customer_layouts"
import DesignerLayout from "@/layouts/designer_layout"
import { RootState } from "@/store/store"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const Notification = () => {
      const designerState = useSelector((state: RootState) => state.designer)
      const dispatch = useDispatch()
      return (
            <>
                  {
                        designerState.is_login === false ?
                              <DesignerLayout is_login={true}>
                                    <Link href='/design' style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                                          <section aria-label="section">
                                                <div className="container">
                                                      <h4>404. Please Login</h4>
                                                </div>
                                          </section>
                                    </Link>
                              </DesignerLayout> :
                              <DesignerLayout is_login={false} >
                                    <div id="top" style={{ height: 10 }}></div>

                                    <section aria-label="section">
                                          <div className="container">
                                                <div className="row">

                                                      <div className="col-md-8">

                                                            <ul className="activity-list">
                                                                  <div id="tab_opt_1" style={{ marginBottom: 20 }}>
                                                                        <input type="text" name="item_price" id="item_price" className="form-control" placeholder="Nhập mã đơn hàng của bạn" />
                                                                  </div>

                                                                  <li className="act_offer" >
                                                                        <img src="images/mau_ao/ao_doi/aodoi-1.jpg" alt="" />
                                                                        <div className="act_list_text">
                                                                              <h4>Áo hoodies 36 phố phường</h4>
                                                                              <a href="#">Size XL  </a> Số lượng: 20
                                                                              <span className="act_list_date">
                                                                                    Thời gian đặt: 11/10/2023
                                                                              </span>
                                                                        </div>
                                                                        <div className="act_list_text">
                                                                              <span className="act_list_date">
                                                                                    Trạng thái: <b>Mới</b> <div className=" fa fa-check"></div>
                                                                              </span>
                                                                        </div>
                                                                  </li>
                                                                  <li className="act_check">
                                                                        <img src="images/mau_ao/ao_doi/aodoi-2.jpg" alt="" />
                                                                        <div className="act_list_text">
                                                                              <h4>Áo đôi blackping</h4>
                                                                              <a href="#">Size X  </a> Số lượng: 40
                                                                              <span className="act_list_date">
                                                                                    Thời gian đặt: 12/12/2023
                                                                              </span>
                                                                              <span className="act_list_date">
                                                                                    Trạng thái: <b>Đang giao</b> <div className=" fa fa-bus"></div>
                                                                              </span>
                                                                        </div>

                                                                  </li>
                                                                  <li className="act_truck">
                                                                        <img src="images/mau_ao/ao_doi/aodoi-2.jpg" alt="" />
                                                                        <div className="act_list_text">
                                                                              <h4>Áo đôi blackping</h4>
                                                                              <a href="#">Size X  </a> Số lượng: 40
                                                                              <span className="act_list_date">
                                                                                    Thời gian đặt: 12/12/2023
                                                                              </span>
                                                                              <span className="act_list_date">
                                                                                    Trạng thái: <b>Đang giao</b> <div className=" fa fa-bus"></div>
                                                                              </span>
                                                                        </div>

                                                                  </li>
                                                                  <li className="act_close">
                                                                        <img src="images/mau_ao/ao_doi/aodoi-2.jpg" alt="" />
                                                                        <div className="act_list_text">
                                                                              <h4>Áo đôi blackping</h4>
                                                                              <a href="#">Size X  </a> Số lượng: 40
                                                                              <span className="act_list_date">
                                                                                    Thời gian đặt: 12/12/2023
                                                                              </span>
                                                                              <span className="act_list_date">
                                                                                    Trạng thái: <b>Đang giao</b> <div className=" fa fa-bus"></div>
                                                                              </span>
                                                                        </div>

                                                                  </li>

                                                            </ul>
                                                      </div>

                                                      <div className="col-md-4">
                                                            <span className="filter__l">Trạng thái đơn hàng</span>
                                                            <div className="spacer-half" style={{ marginTop: 20 }}></div>
                                                            <div className="clearfix"></div>
                                                            <ul className="activity-filter">
                                                                  <li><i className="fa fa-check"></i>Mới</li>
                                                                  <li ><i className="fa fa-truck"></i>Đang giao</li>
                                                                  <li ><i className="fa fa-gavel"></i>Hoàn thành</li>
                                                                  <li ><i className="fa fa-close"></i>Đã huỷ</li>

                                                            </ul>

                                                      </div>

                                                </div>

                                          </div>
                                    </section>
                              </DesignerLayout>
                  }
            </>

      )
}

export default Notification
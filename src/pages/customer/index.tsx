import CustomerLayout from "@/layouts/customer_layouts"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Button, ButtonBase } from "@mui/material";
import { ApiService } from "@/services/api/http";
import { Bill } from "@/services/api/inteface/order.interface";
import Config from "@/config";



interface State {
      phone: string
      order: Array<Bill>
}
const Cutomer = () => {
      const designerState = useSelector((state: RootState) => state.designer)
      const dispatch = useDispatch()
      const [state, setState] = useState<State>({
            phone: designerState.phone,
            order: []
      })
      useEffect(() => {
            ApiService.getOrder(state.phone).then((response) => {
                  setState({
                        ...state,
                        order: response.data.payload.data
                  })
            })
      }, [])

      return (
            <CustomerLayout >
                  <section aria-label="section">
                        <div className="container">
                              <div className="row">

                                    <div className="col-md-8">

                                          <ul className="activity-list">
                                                <div id="tab_opt_1 " style={{ marginBottom: 20 }}>
                                                      <h6 style={{ marginLeft: 5 }}> Số điện thoại đặt hàng:</h6>
                                                      <div className="d-flex align-items-center">
                                                            <input style={{ width: '82%' }} value={state.phone} type="text" name="item_price" id="item_price" className="form-control" placeholder="Nhập số điện thoại đặt hàng của bạn" />
                                                            <div style={{ width: '150px', marginLeft: 10 }}>
                                                                  <ButtonBase
                                                                        style={{ backgroundColor: 'black', borderRadius: 5 }}
                                                                        sx={{ height: "37px" }}
                                                                  >
                                                                        Tìm kiếm <i className="fa fa-search" style={{ marginLeft: 5 }}></i>
                                                                  </ButtonBase>
                                                            </div>

                                                      </div>
                                                </div>
                                                {
                                                      state.order.map((x) =>
                                                            <li className="act_offer" >
                                                                  <img src={`${Config.apiDomain}${x.orders[0].product_detail.photo_befor.path}`} alt="" />
                                                                  <div className="act_list_text">
                                                                        <h4></h4>
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
                                                      )
                                                }


                                                {/* <li className="act_check">
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

                                                </li> */}

                                          </ul>
                                    </div>

                                    <div className="col-md-4" style={{ marginTop: 26 }}>
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
            </CustomerLayout>
      )
}

export default Cutomer
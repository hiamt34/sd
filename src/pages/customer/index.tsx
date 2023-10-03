import CustomerLayout from "@/layouts/customer_layouts"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Button, ButtonBase } from "@mui/material";
import { ApiService } from "@/services/api/http";
import { Bill, BillStatus } from "@/services/api/inteface/order.interface";
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
                        order: response?.data?.payload?.data ?? []
                  })
            })
      }, [])

      const onSearch = () => {
            if (state.phone.length === 0) {
                  return
            }
            ApiService.getOrder(state.phone).then((response) => {
                  setState({
                        ...state,
                        order: response?.data?.payload?.data ?? []
                  })
            })

      }
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
                                                            <input style={{ width: '82%' }} onChange={(event) => setState({
                                                                  ...state,
                                                                  phone: event.currentTarget.value
                                                            })} value={state.phone} type="text" name="item_price" id="item_price" className="form-control" placeholder="Nhập số điện thoại đặt hàng của bạn" />
                                                            <div style={{ width: '150px', marginLeft: 10 }}>
                                                                  <ButtonBase
                                                                        onClick={() => onSearch()}
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
                                                            <li className={x.status === BillStatus.new ?
                                                                  "act_check" :
                                                                  x.status === BillStatus.intransit ?
                                                                        "act_truck" :
                                                                        x.status === BillStatus.done ?
                                                                              "act_offer" :
                                                                              x.status === BillStatus.reject ?
                                                                                    "act_close" : ""
                                                            } >
                                                                  <img src={`${Config.apiDomain}${x.orders[0].product_detail.photo_befor.path}`} alt="" />
                                                                  <div className="act_list_text">
                                                                        <h4></h4>
                                                                        <a href="#">Size {x.orders[0].size}  </a> Số lượng: {x.orders[0].quantity}
                                                                        <span className="act_list_date">
                                                                              Thời gian đặt: {`${(new Date(x.createdAt).getDate())}/${(new Date(x.createdAt).getMonth())}/${(new Date(x.createdAt).getFullYear())}`}
                                                                        </span>
                                                                  </div>
                                                                  {
                                                                        x.status === BillStatus.new ?
                                                                              <div className="act_list_text">
                                                                                    <span className="act_list_date">
                                                                                          Trạng thái: <b>Mới</b><div className=" fa fa-check"></div>
                                                                                    </span>
                                                                              </div> :
                                                                              x.status === BillStatus.intransit ?
                                                                                    <div className="act_list_text">
                                                                                          <span className="act_list_date">
                                                                                                Trạng thái: <b>Đang giao</b><div className=" fa fa-bus"></div>
                                                                                          </span>
                                                                                    </div> :
                                                                                    x.status === BillStatus.done ?
                                                                                          <div className="act_list_text">
                                                                                                <span className="act_list_date">
                                                                                                      Trạng thái: <b>Hoàn thành</b><div className=" fa fa-gavel"></div>
                                                                                                </span>
                                                                                          </div> :
                                                                                          x.status === BillStatus.reject ?
                                                                                                <div className="act_list_text">
                                                                                                      <span className="act_list_date">
                                                                                                            Trạng thái: <b>Đã huỷ</b><div className=" fa fa-close"></div>
                                                                                                      </span>
                                                                                                </div> : null
                                                                  }

                                                            </li>
                                                      )
                                                }
                                          </ul>
                                    </div>

                                    <div className="col-md-4">
                                          <div className="spacer-half" style={{ marginTop: 10 }}></div>
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

import { Paginate } from "@/components/commons/paginate";
import { ProductItem, User } from "@/components/commons/product";
import LoginPage from "@/pages/design/auth";
import { FilterMyProfile } from "@/components/design/my-profile.tsx/filter";
import { TableWallet } from "@/components/design/my-profile.tsx/table";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import DesignerLayout from "@/layouts/designer_layout";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { Box, ButtonBase, CircularProgress, Icon, LinearProgress, Pagination } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { FilterProduct } from "@/components/commons/filter_product";
import { FilterWalletHistory } from "@/components/commons/filter_wallet";
import { designerAction } from "@/store/designer/designerSlice";
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { ApiService } from "@/services/api/http";
import { Product } from "@/services/api/inteface/product.inteface";
import { localStorageService } from "@/services/storage";
import Config from "@/config";
import { Bank } from "@/services/api/inteface/bank.interface";
import { RequestPayment } from "@/components/design/my-profile.tsx/payment_request";
import { ProductItemDetail } from "@/components/commons/product_detail";

interface State {
      productsAll: Array<Product>,
      productHasBeenSide: Array<Product>,
      productWaitingForSide: Array<Product>
      listBank: Array<Bank>
      filterMonth: number
      filterYear: number
}
const MyProfilePage = () => {
      const [state, setState] = useState<State>({
            productsAll: [],
            productHasBeenSide: [],
            productWaitingForSide: [],
            listBank: [],
            filterMonth: 0,
            filterYear: 0
      })
      const designerState = useSelector((state: RootState) => state.designer)
      const dispatch = useDispatch()
      const [isPopupOpen, setIsPopupOpen] = useState(false);
      useEffect(() => {
            let isMounted = true


            ApiService.getProduct({ page: 1, pageSize: 20, filter: [`user_id=${designerState.designer.id}`] }).then((response) => {

                  if (response?.data?.status === 200) {
                        setState({
                              ...state,
                              productsAll: response.data.payload.data,
                              productHasBeenSide: response.data.payload.data.filter((x) => x.status === "SUCCESS"),
                              productWaitingForSide: response.data.payload.data.filter((x) => x.status === "PENDING")
                        })
                  }

            })

      }, [])
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
                                    <DesignerLayout type_class="" is_login={true}>
                                          <section aria-label="section" className="pt40" >
                                                <div className="container">
                                                      <div className="row">
                                                            <div className="col-md-12">
                                                                  <div className="d_profile de-flex align-items-center">
                                                                        <div className="de-flex-col de-flex">
                                                                              <div className="profile_avatar">
                                                                                    <Link href='design/edit-profile'>
                                                                                          <div className="profile_avatar" >
                                                                                                <img
                                                                                                      src={designerState.designer.photo.path}
                                                                                                      alt=""
                                                                                                      style={{ height: '150px', width: '150px' }}
                                                                                                />
                                                                                                <i className="fa fa-edit" />
                                                                                          </div>

                                                                                    </Link>


                                                                                    <div className="profile_name d-table-row">
                                                                                          <div style={{ marginLeft: 5 }}>
                                                                                                <h4 style={{ fontWeight: 1 }} >{designerState.designer.firstName}
                                                                                                </h4>
                                                                                                <span className="profile_username">{designerState.designer.bio}</span>
                                                                                                <span className="profile_username">Mẫu thiết kế: {designerState.designer.count_products}</span>
                                                                                                <div >
                                                                                                      <span style={{ color: 'black', fontFamily: 'cursive' }}>
                                                                                                            Wallet : {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(designerState.designer.money)}
                                                                                                      </span>

                                                                                                </div>


                                                                                          </div>
                                                                                          <Link href='design/create-product'>
                                                                                                <button

                                                                                                      type="button"
                                                                                                      style={{ borderRadius: 5 }}
                                                                                                      className=""
                                                                                                      onClick={() => console.log(designerState.designer)
                                                                                                      }
                                                                                                >

                                                                                                      {/* <a className=" icon_pencil-edit_alt" href="/design/create-product" style={{ marginRight: 5 }} /> */}
                                                                                                      Tạo mẫu thiết kế mới
                                                                                                </button>
                                                                                          </Link>

                                                                                          <button style={{ marginLeft: 20, borderRadius: 5 }}
                                                                                                data-bs-toggle="modal"
                                                                                                data-bs-target="#buy_now"  >
                                                                                                <a className="icon-wallet" style={{ marginRight: 5 }} />
                                                                                                Rút tiền
                                                                                          </button>
                                                                                    </div>

                                                                              </div>

                                                                        </div>

                                                                  </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                  <div className="de_tab tab_simple" >
                                                                        <ul className="de_nav">
                                                                              <li className="active"><span><i className="fa  fa-check-circle"></i>Sản phẩm đang bán</span></li>
                                                                              <li><span><i className="fa fa-exclamation-circle"></i>Sản phẩm đang chờ</span></li>
                                                                              <li><span><i className="fa  fa-money"></i>Biến động số dư</span></li>
                                                                        </ul>
                                                                        <div className="de_tab_content">

                                                                              <div className="tab-1">
                                                                                    <FilterProduct
                                                                                          onSelectCategory={(data) => {
                                                                                                if (data === "Tất cả") {
                                                                                                      setState({
                                                                                                            ...state,
                                                                                                            productHasBeenSide: state.productsAll.filter((x) => x.status === "SUCCESS")
                                                                                                      })
                                                                                                      return
                                                                                                }
                                                                                                setState({
                                                                                                      ...state,
                                                                                                      productHasBeenSide: state.productsAll.filter((x) => x.categories.includes(data) && x.status === "SUCCESS")
                                                                                                })
                                                                                          }}
                                                                                          onSelectTime={(data) => {
                                                                                                if (data === "DESC") {
                                                                                                      setState({
                                                                                                            ...state,
                                                                                                            productHasBeenSide: state.productHasBeenSide.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                                                                                                      })
                                                                                                      return
                                                                                                }
                                                                                                setState({
                                                                                                      ...state,
                                                                                                      productHasBeenSide: state.productHasBeenSide.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                                                                                })
                                                                                          }}
                                                                                    />
                                                                                    <div className="row">
                                                                                          {state.productHasBeenSide.map((x, y) =>
                                                                                                <div key={y} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                                                      <ProductItem
                                                                                                            product_id={x.id}
                                                                                                            is_show_info={true}
                                                                                                            is_none_name={true}
                                                                                                            type={User.Designer}
                                                                                                            imgBefor={`${Config.apiDomain}${x.products_item[0].photo_befor.path}`}
                                                                                                            imgAfter={`${Config.apiDomain}${x.products_item[0].photo_after.path}`}
                                                                                                            name={x.name}
                                                                                                            price={200.000}
                                                                                                      />
                                                                                                </div>
                                                                                          )}

                                                                                    </div>
                                                                              </div>
                                                                              <div className="tab-2">
                                                                                    <FilterProduct
                                                                                          onSelectCategory={(data) => {
                                                                                                if (data === "Tất cả") {
                                                                                                      setState({
                                                                                                            ...state,
                                                                                                            productWaitingForSide: state.productsAll.filter((x) => x.status === "PENDING")
                                                                                                      })
                                                                                                      return
                                                                                                }
                                                                                                setState({
                                                                                                      ...state,
                                                                                                      productWaitingForSide: state.productsAll.filter((x) => x.categories.includes(data) && x.status === "SUCCESS")
                                                                                                })
                                                                                          }}
                                                                                          onSelectTime={(data) => {
                                                                                                if (data === "DESC") {
                                                                                                      setState({
                                                                                                            ...state,
                                                                                                            productWaitingForSide: state.productWaitingForSide.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                                                                                                      })
                                                                                                      return
                                                                                                }
                                                                                                setState({
                                                                                                      ...state,
                                                                                                      productWaitingForSide: state.productWaitingForSide.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                                                                                })
                                                                                          }}
                                                                                    />
                                                                                    <div className="row">
                                                                                          {
                                                                                                state.productWaitingForSide.map((x, y) =>
                                                                                                      <div key={y} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                                                            <ProductItem
                                                                                                                  product_id={x.id}
                                                                                                                  is_show_info={true}
                                                                                                                  is_none_name={true}
                                                                                                                  type={User.Designer}
                                                                                                                  imgBefor={`${Config.apiDomain}${x.products_item[0].photo_befor.path}`}
                                                                                                                  imgAfter={`${Config.apiDomain}${x.products_item[0].photo_after.path}`}
                                                                                                                  name={x.name}
                                                                                                                  price={200.000}
                                                                                                            />

                                                                                                      </div>
                                                                                                )
                                                                                          }


                                                                                    </div>
                                                                              </div>

                                                                              <div className="tab-3">

                                                                                    <div className="row">
                                                                                          <div className="col-md-12" style={{ minHeight: '500px' }}>

                                                                                                <TableWallet

                                                                                                      user_id={designerState.designer.id} />

                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div
                                                            className="modal fade"
                                                            id="buy_now"
                                                            tabIndex={-1}
                                                            aria-labelledby="buy_now"
                                                            aria-hidden="true"
                                                      >
                                                            <div className="modal-dialog modal-dialog-centered de-modal" >
                                                                  <div className="modal-content">
                                                                        <button
                                                                              type="button"
                                                                              className="btn-close"
                                                                              data-bs-dismiss="modal"
                                                                              aria-label="Close"
                                                                        />
                                                                        <div className="modal-body" style={{ margin: 20 }}>
                                                                              <div className="p-3 form-border">
                                                                                    <RequestPayment curentMoney={designerState.designer.money} onSubmit={() => setState} />
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>

                                          </section>

                                    </DesignerLayout> : null
                  }




            </>

      );
};
export default MyProfilePage;

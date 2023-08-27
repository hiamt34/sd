
import { Paginate } from "@/components/commons/paginate";
import { Product, User } from "@/components/commons/product";
import LoginPage from "@/components/design/auth";
import { FilterMyProfile } from "@/components/design/my-profile.tsx/filter";
import { TableWallet } from "@/components/design/my-profile.tsx/table";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import DesignerLayout from "@/layouts/designer_layout";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "./product-detail";
import { FilterBank } from "@/components/design/my-profile.tsx/filter_bank";
import { ButtonBase, Icon, Pagination } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { FilterProduct } from "@/components/commons/filter_product";
import { FilterWalletHistory } from "@/components/commons/filter_wallet";
const MyProfilePage = () => {
      const designerState = useSelector((state: RootState) => state.designer)
      const dispatch = useDispatch()
      const [array1, setArray1] = useState<Array<Item>>([{
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      },
      {
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      },
      {
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      },
      {
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      },
      {
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      }

      ])
      const [array2, setArray2] = useState<Array<Item>>([{
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      },
      {
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      },
      {
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      }
      ])
      const [isPopupOpen, setIsPopupOpen] = useState(false);
      const handleSubmitOneDesign = (data: Item) => {
            data.order++;
            setArray2([...array2, data]);
      }
      return (
            <>
                  {
                        designerState.is_login === false ?
                              <LoginPage /> :
                              <DesignerLayout type_class="no-bottom " is_login={false}>
                                    <section aria-label="section" className="pt40">
                                          <div className="container">
                                                <div className="row">
                                                      <div className="col-md-12">
                                                            <div className="d_profile de-flex align-items-center">
                                                                  <div className="de-flex-col de-flex">
                                                                        <div className="profile_avatar">
                                                                              <Link href='/design/edit-profile' style={{}} >
                                                                                    <div className="profile_avatar" >
                                                                                          <img
                                                                                                src="images/author/author-2.jpg"
                                                                                                alt=""
                                                                                          />
                                                                                          <i className="fa fa-edit" />
                                                                                    </div>

                                                                              </Link>


                                                                              <div className="profile_name d-table-row">
                                                                                    <div style={{ marginLeft: 5 }}>
                                                                                          <h4 style={{ fontWeight: 1 }} >Đinh Thiện Quang
                                                                                          </h4>                                                                                           <span className="profile_username">Designer số 1 việt nam</span>
                                                                                          <span className="profile_username">Mẫu thiết kế: 180</span>
                                                                                          <div >
                                                                                                <span style={{ color: 'black', fontFamily: 'cursive' }}>
                                                                                                      Wallet : 120.000 đ
                                                                                                </span>

                                                                                          </div>


                                                                                    </div>
                                                                                    <button
                                                                                          onClick={() => window.location.href = '/design/create-product'}
                                                                                          type="button"
                                                                                          style={{ borderRadius: 5 }}
                                                                                          className="">

                                                                                          <a className=" icon_pencil-edit_alt" href="/design/create-product" style={{ marginRight: 5 }} />
                                                                                          Tạo mẫu thiết kế mới
                                                                                    </button>
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

                                                                              <FilterProduct />

                                                                              <div className="row">
                                                                                    {array1.map((x, y) =>
                                                                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                                                <Product
                                                                                                      is_show_info={true}
                                                                                                      is_none_name={true}
                                                                                                      type={User.Designer}
                                                                                                      img={`images/mau_ao/ao_don/aodon-${y + 1}.jpg`}
                                                                                                      name="Unisex Yellow"
                                                                                                      price={200.000}
                                                                                                />
                                                                                          </div>
                                                                                    )}
                                                                              </div>
                                                                        </div>
                                                                        <div className="tab-2">
                                                                              <FilterProduct />
                                                                              <div className="row">
                                                                                    {
                                                                                          array2.map((x) =>
                                                                                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                                                      <Product
                                                                                                            is_show_info={true}
                                                                                                            is_none_name={true}
                                                                                                            type={User.Designer}
                                                                                                            img='images/mau_ao/ao_don/aodon-1.jpg'
                                                                                                            name="Unisex Yellow"
                                                                                                            price={200.000}
                                                                                                      />
                                                                                                </div>
                                                                                          )
                                                                                    }
                                                                              </div>
                                                                        </div>

                                                                        <div className="tab-3">
                                                                              <FilterWalletHistory />
                                                                              <div className="row">
                                                                                    <div className="col-md-12" >

                                                                                          <TableWallet />
                                                                                          <div className="spacer-double" />
                                                                                          <Pagination className="pagination justify-content-center" count={10} />
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
                                                                              <h3>Yêu cầU rút tiềN</h3>
                                                                              Ví hiện tại <b>300.000 đ</b>
                                                                              <br />
                                                                              <br />
                                                                              <h5>Tài khoản nhận</h5>
                                                                              <div className="de-flex">
                                                                                    <div>Ngân hàng</div>
                                                                                    <img src='images/icon/mb_bank.png' style={{ height: '40px', width: '100px', borderRadius: '100%' }} />
                                                                                    <div>
                                                                                          <FilterBank />
                                                                                    </div>
                                                                              </div>
                                                                              <div className="de-flex" style={{ marginTop: 10 }}>
                                                                                    <div>Số tài khoản</div>
                                                                                    <div>
                                                                                          <input
                                                                                                className=""
                                                                                                style={{ height: 30 }}
                                                                                          />
                                                                                    </div>
                                                                              </div>
                                                                              <div className="de-flex" style={{ marginTop: 10 }}>
                                                                                    <div>Tên người thụ hưởng</div>
                                                                                    <div>
                                                                                          <input
                                                                                                className=""
                                                                                                style={{ height: 30 }}
                                                                                          />
                                                                                    </div>
                                                                              </div>
                                                                              <div className="de-flex" style={{ marginTop: 10 }}>
                                                                                    <div>Số tiền rút</div>
                                                                                    <div>
                                                                                          <input
                                                                                                className=""
                                                                                                style={{ height: 30 }}
                                                                                          />
                                                                                    </div>
                                                                              </div>
                                                                              <div className="spacer-single" />
                                                                              <a
                                                                                    href="03_grey-wallet.html"
                                                                                    target="_blank"
                                                                                    className="btn-main btn-fullwidth"
                                                                              >
                                                                                    Yêu cầu rút tiền
                                                                              </a>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <DialogCreateOneDesign
                                                onSubmit={(data: Item) => handleSubmitOneDesign(data)}
                                                isOpen={isPopupOpen}
                                                onClose={() => setIsPopupOpen(false)}

                                          />
                                    </section>

                              </DesignerLayout>
                  }

            </>

      );
};
export default MyProfilePage;

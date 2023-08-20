
import { Product, User } from "@/components/commons/product";
import { Paginate } from "@/components/commons/paginate";
import { FilterMyProfile } from "@/components/design/my-profile.tsx/filter";
import { TableMyProfile } from "@/components/design/my-profile.tsx/table";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import CustomerLayout from "@/layouts/customer_layouts";
import { useState } from "react";
import { ButtonBase, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { designerAction } from "@/store/designer/designerSlice";
import { Item } from "./product-detail";
import LoginPage from "@/components/design/auth";
import DesignerLayout from "@/layouts/designer_layout";

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
                                                                              <img
                                                                                    src="images/author/author-1.jpg"
                                                                                    alt=""
                                                                              />
                                                                              <div className="profile_name d-table-row">
                                                                                    <h4 style={{ marginLeft: 5 }}>
                                                                                          Đinh Thiện Quang
                                                                                          <span className="profile_username">Designer số 1 việt nam</span>
                                                                                          <span className="profile_username">Mẫu thiết kế: 180</span>
                                                                                          <span id="wallet" className="profile_wallet">
                                                                                                Wallet : 120.000 đ

                                                                                          </span>

                                                                                    </h4>
                                                                                    <button
                                                                                          type="button"
                                                                                          style={{ borderRadius: 10 }}
                                                                                          onClick={() => { setIsPopupOpen(true) }}
                                                                                          className="">
                                                                                          Tạo mẫu thiết kế mới
                                                                                    </button>
                                                                              </div>

                                                                        </div>

                                                                  </div>

                                                            </div>
                                                      </div>
                                                      <div className="col-md-12">
                                                            <div className="de_tab tab_simple" >
                                                                  <ul className="de_nav">
                                                                        <li className="active">
                                                                              <button
                                                                                    type="button"
                                                                                    style={{ width: 250, margin: 2 }}
                                                                                    className="btn-main">
                                                                                    Sản phẩm đang được bán
                                                                              </button>
                                                                        </li>
                                                                        <li>
                                                                              <button
                                                                                    type="button"
                                                                                    style={{ width: 250, margin: 2 }}
                                                                                    className="btn-main">
                                                                                    Sản phẩm đang chờ duyệt
                                                                              </button>
                                                                        </li>
                                                                        <li>
                                                                              <button
                                                                                    type="button"
                                                                                    style={{ width: 250, margin: 2 }}
                                                                                    className="btn-main">
                                                                                    Biến động số dư
                                                                              </button>
                                                                        </li>

                                                                  </ul>

                                                                  <div className="de_tab_content">
                                                                        <div className="tab-1">
                                                                              <div className="row">
                                                                                    {array1.map((x) =>
                                                                                          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                                                <Product
                                                                                                      is_none_name={true}
                                                                                                      showProfileAvatar={false}
                                                                                                      type={User.Designer}
                                                                                                      img='images/mau_ao/ao_don/aodon-1.jpg'
                                                                                                      name="Unisex Yellow"
                                                                                                      price={200.000}
                                                                                                />
                                                                                          </div>
                                                                                    )}
                                                                              </div>
                                                                        </div>
                                                                        <div className="tab-2">
                                                                              <div className="row">
                                                                                    {
                                                                                          array2.map((x) =>
                                                                                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                                                      <Product
                                                                                                            is_none_name={true}
                                                                                                            showProfileAvatar={false}
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
                                                                              <div className="row">
                                                                                    <div className="col-md-12" >
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
                                    <DialogCreateOneDesign
                                          onSubmit={(data: Item) => handleSubmitOneDesign(data)}
                                          isOpen={isPopupOpen}
                                          onClose={() => setIsPopupOpen(false)}

                                    />
                              </DesignerLayout>
                  }

            </>

      );
};
export default MyProfilePage;

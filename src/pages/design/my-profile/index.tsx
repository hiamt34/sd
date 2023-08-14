
import { Product, User } from "@/components/commons/product";
import { Paginate } from "@/components/commons/paginate";
import { FilterMyProfile } from "@/components/design/my-profile.tsx/filter";
import { TableMyProfile } from "@/components/design/my-profile.tsx/table";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import ClientLayout from "@/layouts";
import { Item } from "../product-detail";
import { useState } from "react";
import { ButtonBase } from "@mui/material";

const MyProfilePage = () => {
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
    <ClientLayout type_class="no-bottom">
      <section aria-label="section" className="pt40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d_profile de-flex">
                <div className="de-flex-col">
                  <div className="profile_avatar">
                    <img
                      src="images/author/author-1.jpg"
                      alt=""
                    />

                    <div className="profile_name">
                      <h4>
                        Đinh Thiện Quang
                        <span className="profile_username">Designer số 1 việt nam</span>
                        <span id="wallet" className="profile_wallet">
                          Mẫu thiết kế : 120
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="profile_follow de-flex">
                  <div className="de-flex-col">
                    <ButtonBase
                      type="button"
                      style={{ margin: 5, borderRadius: 10 }}
                      onClick={() => setIsPopupOpen(true)}
                      className="btn-main">
                      Tạo mẫu thiết kế mới
                    </ButtonBase>
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
                      {array1.map((x) =>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <Product
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
    </ClientLayout>
  );
};
export default MyProfilePage;

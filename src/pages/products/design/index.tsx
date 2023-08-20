
import { Product, User } from "@/components/commons/product";
import { Paginate } from "@/components/commons/paginate";
import { FilterMyProfile } from "@/components/design/my-profile.tsx/filter";
import { TableMyProfile } from "@/components/design/my-profile.tsx/table";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import CustomerLayout from "@/layouts/customer_layouts";
import { useState } from "react";
import { ButtonBase } from "@mui/material";
import { Item } from "@/pages/design/product-detail";

const DesignPage = () => {
  const [array, setArray] = useState<Array<Item>>([{
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
    setArray([...array, data]);
  }
  return (
    <CustomerLayout type_class="no-bottom">
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
                          Mẫu thiết kế :120
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-12">
              <div className="de_tab tab_simple">
                <div className="de_tab_content">
                  <div className="tab-2">
                    <div className="row">

                      {array.map((x) =>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <Product
                            is_none_name={true}
                            showProfileAvatar={false}
                            type={User.Customer}
                            img='images/mau_ao/ao_don/aodon-1.jpg'
                            name="Free style Blue"
                            price={180.000}
                          />
                        </div>
                      )}


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
    </CustomerLayout>
  );
};
export default DesignPage;

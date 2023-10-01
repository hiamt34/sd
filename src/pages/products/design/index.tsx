
import { User } from "@/components/commons/product";

import DialogCreateOneDesign from "@/components/pogup/create_prod";
import CustomerLayout from "@/layouts/customer_layouts";
import { useState } from "react";
import { ButtonBase } from "@mui/material";
import { ProductDetail } from "@/services/api/inteface/product_detail.interface";
import { Product } from "@/services/api/inteface/product.inteface";


const DesignPage = () => {
  const [array, setArray] = useState<Array<ProductDetail>>([])
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleSubmitOneDesign = (data: ProductDetail) => {
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
    </CustomerLayout>
  );
};
export default DesignPage;

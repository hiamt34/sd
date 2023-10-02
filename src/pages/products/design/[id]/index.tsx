
import { ProductItem, User } from "@/components/commons/product";

import DialogCreateOneDesign from "@/components/pogup/create_prod";
import CustomerLayout from "@/layouts/customer_layouts";
import { useState, useEffect } from "react";
import { ButtonBase } from "@mui/material";
import { ProductDetail } from "@/services/api/inteface/product_detail.interface";
import { Product } from "@/services/api/inteface/product.inteface";
import { Designer } from "@/services/api/inteface/designer.interface";
import Config from "@/config";
import { ApiService } from "@/services/api/http";

interface State {
  designer: Designer
  product: Array<Product>
}
const DesignPage = () => {
  const [state, setState] = useState<State>({
    designer: {} as any,
    product: []
  })


  useEffect(() => {
    const url = window?.location?.href
    const match = url.match(/products\/design\/(\d+)$/) ?? [];
    ApiService.getListDesigner({ page: 1, pageSize: 1, filter: [`id=${parseInt(match[1])}`] }).then((response) => {
      if (response.status === 200) {
        setState({
          ...state,
          designer: response.data.payload.data[0]
        })
      }
    })
    ApiService.getProduct({ page: 1, pageSize: 50, filter: [`user_id=${parseInt(match[1])}`] }).then((response) => {
      setState({
        ...state,
        product: response.data.payload.data
      })
    })
  }, [])
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
                        {state.designer?.firstName}
                        <span className="profile_username"></span>
                        <span id="wallet" className="profile_wallet">
                          Mẫu thiết kế :{state.designer.count_products ?? 0}
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

                      {state.product.map((x, y) =>
                        <div key={y} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <ProductItem
                            product_id={x.id}
                            is_show_info={true}
                            is_none_name={true}
                            type={User.Customer}
                            imgBefor={`${Config.apiDomain}${x.products_item[0].photo_befor.path}`}
                            imgAfter={`${Config.apiDomain}${x.products_item[0].photo_after.path}`}
                            name={x.name}
                            price={200.000}
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

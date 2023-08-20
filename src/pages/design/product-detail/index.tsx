import { Api } from "@/api/http";
import { Product, User } from "@/components/commons/product";
import { ProductDetail } from "@/components/commons/product_detail";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import CustomerLayout from "@/layouts/customer_layouts";
import { useState } from "react";
export enum Location {
      BEFOR = "Befor",
      AFTER = "After"
}
export interface Item {
      id: string
      order: number
      imgBefor: string
      imgDesignBefor: string
      imgAfter: string
      imgDesignAfter: string
      status: string
}
const CreatePage = () => {

      const [array, setArray] = useState<Array<Item>>([{
            id: '1234',
            order: 1,
            imgBefor: "",
            imgDesignBefor: "",
            imgAfter: "",
            imgDesignAfter: "",
            status: "",
      }])
      const [isPopupOpen, setIsPopupOpen] = useState(false);
      const handleSubmitOneDesign = (data: Item) => {
            data.order++;
            setArray([...array, data]);
      }

      return (
            <>
                  <CustomerLayout>
                        <section aria-label="section">
                              <div className="container">
                                    <div className="row wow fadeIn">
                                          <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                                <Product name="Anime Blackping" price={180.000} is_none_name={true} showProfileAvatar={false} img="images/mau_ao/ao_doi/aodoi-1.jpg" type={User.Designer} />
                                          </div>
                                          <div className="d-item col-lg-9 col-md-6 col-sm-6 col-xs-12" >
                                                <h1>Mẫu thiết kế Blackping</h1>
                                                <h5>Ngày tạo: 20/12/2023</h5>
                                                <br />
                                                <h5>Lượt mua: 10</h5>
                                                <br />
                                                <h5>Chủ đề:</h5>
                                                <button
                                                      type="button"
                                                      className="btn-main"
                                                      style={{ margin: 5, borderRadius: 10 }}
                                                      onClick={async () => console.log(await Api.getOneProductDesign("1"))
                                                      }
                                                >
                                                      Anime
                                                </button>
                                                <button
                                                      type="button"
                                                      className="btn-main"
                                                      style={{ margin: 5, borderRadius: 10 }}
                                                >
                                                      Áo đôi
                                                </button>
                                                <button
                                                      type="button"
                                                      className="btn-main"
                                                      style={{ margin: 5, borderRadius: 10 }}
                                                >
                                                      Áo đôi
                                                </button>

                                          </div>

                                          <h3 style={{ marginTop: 20 }}>Hãy tạo thêm thiết kế vào mẫu thiếT kế của bạn</h3>

                                          <div className="col-md-12">
                                                <div className="row">
                                                      {
                                                            array.map((x) =>
                                                                  <div key={Math.random()} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                        <ProductDetail type={User.Designer} />
                                                                  </div>
                                                            )
                                                      }
                                                      <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="" style={{ margin: 40, width: '40%', height: '45%' }} >

                                                                  <h5 style={{ display: 'flex', justifyContent: 'center' }}></h5>
                                                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '240px', height: '300px' }}>
                                                                        <button
                                                                              type="button"
                                                                              className="btn-main"
                                                                              onClick={() => setIsPopupOpen(true)}
                                                                              style={{ borderRadius: 10 }}
                                                                        >
                                                                              Upload
                                                                        </button>

                                                                        <input type="file" id="upload_file" />

                                                                  </div>

                                                            </div>
                                                      </div>
                                                </div>

                                          </div>

                                    </div>
                              </div>
                        </section>
                  </CustomerLayout >
                  <DialogCreateOneDesign
                        onSubmit={(data: Item) => handleSubmitOneDesign(data)}
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}

                  />
            </>
      )
};
export default CreatePage;

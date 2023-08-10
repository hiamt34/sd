import { CollectionDesign } from "@/components/commons/collection-design";
import { ItemDesign } from "@/components/commons/item-design";
import { ItemItems } from "@/components/commons/item-patten";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import ClientLayout from "@/layouts";
import { ButtonBase } from "@mui/material";
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
                  <ClientLayout>
                        <section aria-label="section">
                              <div className="container">
                                    <div className="row wow fadeIn">
                                          <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                                <CollectionDesign showProfileAvatar={false} />
                                          </div>
                                          <div className="d-item col-lg-9 col-md-6 col-sm-6 col-xs-12" >
                                                <h1>Mẫu thiết kế Blackping</h1>
                                                <h5>Ngày tạo: 20/12/2023</h5>
                                                <br />
                                                <h5>Lượt mua: 10</h5>
                                                <br />
                                                <h5>Chủ đề:</h5>
                                                <ButtonBase
                                                      type="button"
                                                      className="btn-main"
                                                      style={{ margin: 5, borderRadius: 10 }}
                                                      onClick={() => console.log(array)}
                                                >
                                                      Anime
                                                </ButtonBase>
                                                <ButtonBase
                                                      type="button"
                                                      className="btn-main"
                                                      style={{ margin: 5, borderRadius: 10 }}
                                                >
                                                      Áo đôi
                                                </ButtonBase>
                                                <ButtonBase
                                                      type="button"
                                                      className="btn-main"
                                                      style={{ margin: 5, borderRadius: 10 }}
                                                >
                                                      Áo đôi
                                                </ButtonBase>

                                          </div>

                                          <h3 style={{ marginTop: 20 }}>Hãy tạo thêm thiết kế vào mẫu thiếT kế của bạn</h3>

                                          <div className="col-md-12">
                                                <div className="row">
                                                      {
                                                            array.map((x) =>
                                                                  <div key={Math.random()} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                        <ItemDesign />
                                                                  </div>
                                                            )
                                                      }
                                                      <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="" style={{ margin: 40, width: '40%', height: '45%' }} >

                                                                  <h5 style={{ display: 'flex', justifyContent: 'center' }}></h5>
                                                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '240px', height: '300px' }}>
                                                                        <ButtonBase
                                                                              type="button"
                                                                              className="btn-main"
                                                                              onClick={() => setIsPopupOpen(true)}
                                                                              style={{ borderRadius: 10 }}
                                                                        >
                                                                              Upload
                                                                        </ButtonBase>

                                                                        <input type="file" id="upload_file" />

                                                                  </div>

                                                            </div>
                                                      </div>
                                                </div>

                                          </div>

                                    </div>
                              </div>
                        </section>
                  </ClientLayout >
                  <DialogCreateOneDesign
                        onSubmit={(data: Item) => handleSubmitOneDesign(data)}
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}

                  />
            </>
      )
};
export default CreatePage;

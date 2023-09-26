
import { ProductItem, User } from "@/components/commons/product";
import { ProductItemDetail } from "@/components/commons/product_detail";
import DialogCreateOneDesign from "@/components/pogup/create_prod";
import Config from "@/config";
import DesignerLayout from "@/layouts/designer_layout";
import { ApiService } from "@/services/api/http";
import { Product } from "@/services/api/inteface/product.inteface";
import { ProductDetail } from "@/services/api/inteface/product_detail.interface";
import { Box, ButtonBase, CircularProgress, Icon, LinearProgress, Pagination } from "@mui/material";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface State {
      product: Product
      productDetail: Array<ProductDetail>
      newProductDetail: ProductDetail
      pogup: boolean
}
const CreatePage = () => {



      const designerState = useSelector((state: RootState) => state.designer)
      const dispatch = useDispatch()
      const [state, setState] = useState<State>({
            product: Product.createObj(),
            productDetail: [],
            newProductDetail: ProductDetail.createObj(),
            pogup: false
      })
      const handleSubmitOneDesign = () => {
      }
      useEffect(() => {
            const url = window.location.href

            let product_id: any
            const match = url.match(/product-detail\/(\d+)$/);
            if (match) {
                  product_id = parseInt(match[1])
            }

            ApiService.getProduct({
                  page: 1,
                  pageSize: 1,
                  filter: [`id=${product_id}`]
            }).then((response) => {
                  if (response.data.payload.data.length !== 0 && response.data.status === 200) {
                        response.data.payload.data[0].photo.path = `${Config.apiDomain}${response.data.payload.data[0].photo.path}`
                        response.data.payload.data[0].products_item = response.data.payload.data[0].products_item.map((x) => {
                              return {
                                    ...x,
                                    photo_after: {
                                          ...x.photo_after,
                                          path: `${Config.apiDomain}${x.photo_after.path}`
                                    },
                                    photo_befor: {
                                          ...x.photo_befor,
                                          path: `${Config.apiDomain}${x.photo_befor.path}`
                                    },
                                    photo_design_after: {
                                          ...x.photo_design_after,
                                          path: `${Config.apiDomain}${x.photo_design_after.path}`
                                    },
                                    photo_design_befor: {
                                          ...x.photo_design_befor,
                                          path: `${Config.apiDomain}${x.photo_design_befor.path}`
                                    }
                              }
                        })
                        setState({
                              ...state,
                              product: response.data.payload.data[0],
                              productDetail: response.data.payload.data[0].products_item
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
                                    <DesignerLayout is_login={true}>
                                          <section aria-label="section">
                                                <div className="container">
                                                      <div className="row wow fadeIn">
                                                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                                                                  <ProductItem product_id={state.product.id} name="Anime Blackping" price={180.000} is_none_name={true} height={400} img={state.product.photo?.path} type={User.Designer} />
                                                            </div>
                                                            <div className="d-item col-lg-9 col-md-6 col-sm-6 col-xs-12" >
                                                                  <br></br>
                                                                  <h3>Tên mẫu thiết kế: {state.product.name}</h3>
                                                                  <h3>Ngày tạo: {`${new Date(state.product.createdAt).getDate()}/${new Date(state.product.createdAt).getMonth()}/${new Date(state.product.createdAt).getFullYear()}`}</h3>

                                                                  <h3>Lượt mua: 10</h3>
                                                                  <h3>Chủ đề:</h3>
                                                                  {state.product.categories.map((x, y) => <button
                                                                        key={y}
                                                                        type="button"
                                                                        className="btn-main"
                                                                        style={{ margin: 5, borderRadius: 10 }}
                                                                  >
                                                                        {x}
                                                                  </button>)}



                                                            </div>

                                                            <h3 style={{ marginTop: 20 }}>Hãy tạo thêm thiết kế vào mẫu thiếT kế của bạn</h3>

                                                            <div className="col-md-12">
                                                                  <div className="row">
                                                                        {
                                                                              state.productDetail.map((x) =>
                                                                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                                          <ProductItemDetail item={x} />
                                                                                    </div>
                                                                              )
                                                                        }
                                                                        <div className="" style={{ margin: 40, width: '40%', height: '45%' }} >
                                                                              <h5 style={{ display: 'flex', justifyContent: 'center' }}></h5>
                                                                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '240px', height: '300px' }}>
                                                                                    <button
                                                                                          type="button"
                                                                                          className="btn-main"
                                                                                          onClick={() => setState({
                                                                                                ...state,
                                                                                                pogup: true
                                                                                          })}
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
                                          </section>
                                          <DialogCreateOneDesign
                                                product_id={state.product.id}
                                                isOpen={state.pogup}
                                                onClose={() => setState({
                                                      ...state,
                                                      pogup: false
                                                })}

                                          />
                                    </ DesignerLayout> : null
                  }




            </>
      )
};
export default CreatePage;

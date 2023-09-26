import { ProductItem, User } from "@/components/commons/product"
import DesignerLayout from "@/layouts/designer_layout"
import { ApiService } from "@/services/api/http"
import { CreateProductDto } from "@/services/api/inteface/product.inteface"
import { CreateProductDetailDto } from "@/services/api/inteface/product_detail.interface"
import { RootState } from "@/store/store"
import { ButtonBase, LinearProgress } from "@mui/material"
import Link from "next/link"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
interface State {
      image1: string
      image2: string
      image3: string
      image4: string
      file1: any
      file2: any
      file3: any
      file4: any
      validImage1: string
      validImage2: string
      validImage3: string
      validImage4: string
      name: string
      validName: string
      categoryChose: Array<string>
      submit: string
      description: string
      validDescription: string
      validSubmit: string
      product_id: number
      [key: string]: any
}
export const createProduct = () => {
      const designerState = useSelector((state: RootState) => state.designer)
      const dispatch = useDispatch()
      const [state, setState] = useState<State>({
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            description: "Thiết kế chuyên nghiệp",
            validDescription: "",
            file1: null,
            file2: null,
            file3: null,
            file4: null,
            validImage1: "",
            validImage2: "",
            validImage3: "",
            validImage4: "",
            name: "",
            submit: "Tạo thiết kế",
            validSubmit: "",
            validName: "",
            categoryChose: [],
            product_id: 0
      })
      const onSubmit = async () => {
            setState({
                  ...state,
                  submit: "Đang tạo thiết kế"
            })

            if (state.name.length === 0) {
                  setState({
                        ...state,
                        validName: 'Vui lòng điền tên cho mẫu thiết kế'
                  })
                  return
            }
            if (state.image1 === "") {
                  setState({
                        ...state,
                        validImage1: "Vui lòng upload thiết kế"
                  })
                  return
            }
            if (state.image2 === "") {
                  setState({
                        ...state,
                        validImage2: "Vui lòng upload thiết kế"
                  })
                  return
            }
            if (state.image3 === "") {
                  setState({
                        ...state,
                        validImage3: "Vui lòng upload thiết kế"
                  })
                  return
            }
            if (state.image4 === "") {
                  setState({
                        ...state,
                        validImage4: "Vui lòng upload thiết kế"
                  })
                  return
            }
            const formData1 = new FormData()
            formData1.append('file', state.file1)
            const formData2 = new FormData()
            formData2.append('file', state.file2)
            const formData3 = new FormData()
            formData3.append('file', state.file3)
            const formData4 = new FormData()
            formData4.append('file', state.file4)
            const [file1, file2, file3, file4] = await Promise.all([
                  ApiService.uploadFile(formData1),
                  ApiService.uploadFile(formData2),
                  ApiService.uploadFile(formData3),
                  ApiService.uploadFile(formData4),
            ])
            if (file1.status !== 201 || file2.status !== 201 || file3.status !== 201 || file4.status !== 201) {
                  setState({
                        ...state,
                        validSubmit: 'Tạo mẫu thất bại, vui lòng thử lại trong ít phút'
                  })
                  return
            }
            let category: Array<string> = []
            if (state.categoryChose.length !== 0) {
                  state.categoryChose.forEach((x) => {
                        category.push(x)
                  })
            }
            const dataSend: CreateProductDto = {
                  categories: category,
                  name: state.name,
                  photo: {
                        id: file1.data.payload.id
                  },
                  description: state.description
            }
            const product = await ApiService.createProduct(dataSend)
            if (product.data.status === 201) {
                  const dataSendProductDetail: CreateProductDetailDto = {
                        product_id: product.data.payload.id,
                        photo_befor: {
                              id: file1.data.payload.id
                        },
                        photo_design_befor: {
                              id: file2.data.payload.id
                        },
                        photo_after: {
                              id: file3.data.payload.id
                        },
                        photo_design_after: {
                              id: file4.data.payload.id
                        }
                  }
                  setState({
                        ...state,
                        product_id: product.data.payload.id
                  })
                  const productDetail = await ApiService.createProductDetail(dataSendProductDetail)
                  if (productDetail.data.status === 201) {
                        refRedirect.current?.click()
                        return
                  }
                  setState({
                        ...state,
                        submit: "Tạo thiết kế",
                        validSubmit: "Tạo mẫu thất bại, vui lòng thử lại trong ít phút"
                  })
            }
            return
      }
      const ref1 = useRef<HTMLInputElement | null>(null);
      const ref2 = useRef<HTMLInputElement | null>(null);
      const ref3 = useRef<HTMLInputElement | null>(null);
      const ref4 = useRef<HTMLInputElement | null>(null);
      const refRedirect = useRef<HTMLInputElement | null>(null);
      const onUpload = (number: number) => {
            switch (number) {
                  case 1:
                        ref1.current?.click()
                        break;
                  case 2:
                        ref2.current?.click()
                        break;
                  case 3:
                        ref3.current?.click()
                        break;
                  case 4:
                        ref4.current?.click()
                        break;
            }
      }
      const onChangeUpload = (event: any, number: number) => {
            const file = event.target.files[0];
            const fileExtension = file.name.split('.').pop().toLowerCase()
            if (!file) {
                  return
            }
            if (file.name.toLowerCase().lastIndexOf('.') === -1 || !['jpg', 'png'].includes(fileExtension)) {
                  switch (number) {
                        case 1:
                              setState({
                                    ...state,
                                    validImage1: 'Vui lòng chọn file định dạng là png,jpg'
                              })
                              break;
                        case 2:
                              setState({
                                    ...state,
                                    validImage2: 'Vui lòng chọn file định dạng là png,jpg'
                              })
                              break;
                        case 3:
                              setState({
                                    ...state,
                                    validImage3: 'Vui lòng chọn file định dạng là png,jpg'
                              })
                              break;
                        case 4:
                              setState({
                                    ...state,
                                    validImage4: 'Vui lòng chọn file định dạng là png,jpg'
                              })
                              break;
                  }

                  return
            }
            switch (number) {
                  case 1:
                        const reader1 = new FileReader()
                        reader1.onload = function (e) {
                              setState({
                                    ...state,
                                    image1: e.target?.result as string,
                                    file1: file
                              })
                        }
                        reader1.readAsDataURL(file)
                        break
                  case 2:
                        const reader2 = new FileReader()
                        reader2.onload = function (e) {
                              setState({
                                    ...state,
                                    image2: e.target?.result as string,
                                    file2: file
                              })
                        }
                        reader2.readAsDataURL(file)
                        break
                  case 3:
                        const reader3 = new FileReader()
                        reader3.onload = function (e) {
                              setState({
                                    ...state,
                                    image3: e.target?.result as string,
                                    file3: file
                              })
                        }
                        reader3.readAsDataURL(file)
                        break
                  case 4:
                        const reader4 = new FileReader()
                        reader4.onload = function (e) {
                              setState({
                                    ...state,
                                    image4: e.target?.result as string,
                                    file4: file
                              })
                        }
                        reader4.readAsDataURL(file)
                        break
            }
      }

      const onChangeCategory = (category: string) => {
            const categoryInChose = state.categoryChose.find((x) => x === category)
            if (categoryInChose) {
                  return
            }
            setState({
                  ...state,
                  categoryChose: [...state.categoryChose, category]
            })
      }
      const removeCategoryChose = (category: string) => {
            setState({
                  ...state,
                  categoryChose: state.categoryChose.filter((x) => x !== category)
            })
      }



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
                                          <Link href={`/design/product-detail/${state.product_id}`} ref={refRedirect as any}></Link>
                                          <section aria-label="section" style={{ marginTop: 0, paddingTop: 20 }}>
                                                <div className="container">
                                                      <div className="row wow fadeIn">
                                                            <div className="col-lg-7 offset-lg-1">
                                                                  <form id="form-item" className="form-border" method="post" action="https://gigaland.io/email.php">
                                                                        <div className="field-set">
                                                                              <div className="col-md-12">
                                                                                    <div className="row">
                                                                                          <div className="de_tab tab_methods">
                                                                                                <div id="tab_opt_1">
                                                                                                      <h5 style={{ fontWeight: 1 }}>Tên mẫu thiết kế</h5>
                                                                                                      <input type="text" name="item_price" id="item_price" className="form-control" placeholder="Eg.Unisex Blackping" style={{ width: '85%', marginBottom: 5 }} onChange={(event) => {
                                                                                                            setState({
                                                                                                                  ...state,
                                                                                                                  name: event.target.value,
                                                                                                                  validName: ""
                                                                                                            })
                                                                                                      }} />
                                                                                                      <div style={{ color: "red", marginLeft: 3, fontSize: '14px' }}>{state.validName}</div>
                                                                                                </div>

                                                                                          </div>
                                                                                          <h5 style={{ fontWeight: 1 }}>Upload thiết kế</h5>
                                                                                          {
                                                                                                ['file1', 'file2', 'file3', 'file4'].map((x: string, y: number) =>
                                                                                                      <>
                                                                                                            <div className="d-item col-lg-5 col-md-6 col-sm-6 col-xs-12" style={{ margin: 5 }}>
                                                                                                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '300px', height: '250px', borderRadius: 20 }}>
                                                                                                                        {
                                                                                                                              state[x] !== null ?
                                                                                                                                    <>
                                                                                                                                          <img
                                                                                                                                                src={x === 'file1' ? state.image1 :
                                                                                                                                                      x === 'file2' ? state.image2 :
                                                                                                                                                            x === 'file3' ? state.image3 :
                                                                                                                                                                  x === 'file4' ? state.image4 : ""
                                                                                                                                                }
                                                                                                                                                alt=""
                                                                                                                                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                                                                                                                                          />

                                                                                                                                    </> :
                                                                                                                                    <>
                                                                                                                                          <div style={{ height: '20%' }}>
                                                                                                                                                <button
                                                                                                                                                      type="button"
                                                                                                                                                      className="btn-main"
                                                                                                                                                      style={{ borderRadius: 10 }}
                                                                                                                                                      onClick={() => onUpload(y + 1)}
                                                                                                                                                >
                                                                                                                                                      {
                                                                                                                                                            x === 'file1' ? "Tải ảnh mặt trước áo" :
                                                                                                                                                                  x === 'file2' ? "Tải hình mặt trước áo" :
                                                                                                                                                                        x === 'file3' ? "Tải ảnh mặt sau áo" :
                                                                                                                                                                              x === 'file4' ? "Tải hình mặt sau áo" : null
                                                                                                                                                      }
                                                                                                                                                </button>
                                                                                                                                                <div style={{ color: "red", marginLeft: 3, fontSize: '14px', display: 'flex', justifyContent: 'center' }}>{
                                                                                                                                                      x === 'file1' ? state.validImage1 :
                                                                                                                                                            x === 'file2' ? state.validImage2 :
                                                                                                                                                                  x === 'file3' ? state.validImage3 :
                                                                                                                                                                        x === 'file4' ? state.validImage4 : null}</div>

                                                                                                                                          </div>

                                                                                                                                          <input type="file" id="upload_file" onChange={(event) => onChangeUpload(event, y + 1)} ref={
                                                                                                                                                x === 'file1' ? ref1 :
                                                                                                                                                      x === 'file2' ? ref2 :
                                                                                                                                                            x === 'file3' ? ref3 :
                                                                                                                                                                  x === 'file4' ? ref4 : null
                                                                                                                                          } />
                                                                                                                                    </>
                                                                                                                        }



                                                                                                                  </div>

                                                                                                            </div>
                                                                                                      </>

                                                                                                )
                                                                                          }

                                                                                    </div>
                                                                              </div>
                                                                              <div style={{ color: "red", marginLeft: 3, fontSize: '14px', display: 'flex', justifyContent: 'center' }}>{state.validSubmit}</div>


                                                                              <div style={{ display: 'flex', marginTop: 50 }}>

                                                                                    <div className="field-set" style={{ width: '30%' }}>
                                                                                          <ButtonBase
                                                                                                style={{ borderRadius: 5, backgroundColor: 'black' }}
                                                                                                onClick={() => onSubmit()}
                                                                                          > {state.submit}</ButtonBase>
                                                                                          {
                                                                                                state.submit === "Đang tạo thiết kế" &&
                                                                                                <LinearProgress
                                                                                                      color='info'
                                                                                                      style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                                                                />
                                                                                          }

                                                                                    </div>
                                                                                    <div className="field-set" style={{ width: '30%', marginLeft: 20 }}>
                                                                                          <Link href='/design'>
                                                                                                <ButtonBase
                                                                                                      style={{ borderRadius: 5, backgroundColor: 'black' }}
                                                                                                > Quay lại</ButtonBase>
                                                                                          </Link>


                                                                                    </div>

                                                                              </div>


                                                                        </div>
                                                                  </form>
                                                            </div>

                                                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                                                  <h5 style={{ fontWeight: 1 }}>Preview item</h5>
                                                                  <ProductItem product_id={state.product_id} imgAfter={state.image2 === "" ? 'images/mau_ao_nen/trang.jpg' : state.image2} imgBefor={state.image1 === "" ? 'images/mau_ao_nen/trang.jpg' : state.image1} type={User.Designer} name={state.name === "" ? "Eg.Unisex" : state.name} price={180.000} is_show_info={true} is_none_name={false} />
                                                                  <h5 style={{ fontWeight: 1 }}>Chủ đề</h5>
                                                                  <div className="d-item col-lg-12 col-md-6 col-sm-6 col-xs-12" >
                                                                        {
                                                                              state.categoryChose.map((x) =>
                                                                                    <button onClick={() => removeCategoryChose(x)} className="btn-main" style={{ marginRight: 8, borderRadius: 10, marginBottom: 10, }}>{x}</button>
                                                                              )
                                                                        }
                                                                  </div>
                                                                  <div id="" className="">
                                                                        <a href="#" className="btn-selector">Hãy chọn chủ để cho mãu thiết kế</a>
                                                                        <ul>
                                                                              {designerState.categories.map((x) =>
                                                                                    <li onClick={() => onChangeCategory(x)}><span>{x}</span></li>
                                                                              )}


                                                                        </ul>
                                                                  </div>

                                                            </div>
                                                      </div>
                                                </div>
                                          </section >
                                    </DesignerLayout > : null
                  }
            </>


      )
}
export default createProduct
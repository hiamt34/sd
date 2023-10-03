
import { ApiService } from '@/services/api/http';
import { Dialog, DialogContent, DialogTitle, LinearProgress } from '@mui/material';
import { useRef, useState } from 'react';
interface props {
      isOpen: boolean
      product_id: number
      onClose: () => void

}
interface State {
      imgBefor: string
      fileBefor: any
      imgAfter: string
      fileAfter: any
      designBefor: string
      fileDesignBefor: any
      designAfter: string
      fileDesignAfter: any,
      buttonSubmit: string
      validBefor: string
      validAfter: string
      validDesignBefor: string
      validDesignAfter: string
}
const DialogCreateOneDesign = (prop: props) => {
      const imgBeforRef = useRef<HTMLInputElement | null>(null);
      const imgAfterRef = useRef<HTMLInputElement | null>(null);
      const designBeforRef = useRef<HTMLInputElement | null>(null);
      const designAfterRef = useRef<HTMLInputElement | null>(null);
      const [state, setState] = useState<State>({
            imgBefor: '',
            fileBefor: {},
            imgAfter: '',
            fileAfter: {},
            designBefor: '',
            fileDesignBefor: {},
            designAfter: '',
            fileDesignAfter: {},
            buttonSubmit: "Tạo mới",
            validBefor: "",
            validAfter: "",
            validDesignBefor: "",
            validDesignAfter: ""

      });

      const clickUploadFile = (type: string) => {
            switch (type) {
                  case "Mặt trước":
                        if (imgBeforRef.current) {
                              imgBeforRef.current.click()
                        }
                        break;
                  case "Mặt sau":
                        if (imgAfterRef.current) {
                              imgAfterRef.current.click()
                        }
                        break;
                  case "Hình mặt trước":
                        if (designBeforRef.current) {
                              designBeforRef.current.click()
                        }
                        break;
                  case "Hình mặt sau":
                        if (designAfterRef.current) {
                              designAfterRef.current.click()
                        }
                        break;


            }

      }

      const clickCancel = () => {
            setState({
                  imgBefor: '',
                  fileBefor: {},
                  imgAfter: '',
                  fileAfter: {},
                  designBefor: '',
                  fileDesignBefor: {},
                  designAfter: '',
                  fileDesignAfter: {},
                  buttonSubmit: "Tạo mới",
                  validBefor: "",
                  validAfter: "",
                  validDesignBefor: "",
                  validDesignAfter: ""
            })
            prop.onClose()
      }


      const handleFileSeclet = (event: any, type: string) => {
            const file = event.target.files[0];
            if (!file) {
                  return
            }
            if (!file || file.name.toLowerCase().lastIndexOf('.') === -1) {
                  return
            }
            const fileExtension: string = file.name.split('.').pop().toLowerCase()
            if (fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'gif') {
                  return
            }
            const reader = new FileReader()
            switch (type) {
                  case "Mặt trước":
                        reader.onload = function (e) {
                              setState({
                                    ...state,
                                    validBefor: "",
                                    imgBefor: e.target?.result as string,
                                    fileBefor: file
                              })
                        }
                        reader.readAsDataURL(file)
                        break;
                  case "Mặt sau":
                        reader.onload = function (e) {
                              setState({
                                    ...state,
                                    validAfter: "",
                                    imgAfter: e.target?.result as string,
                                    fileAfter: file
                              })
                        }
                        reader.readAsDataURL(file)
                        break;
                  case "Hình mặt trước":

                        reader.onload = function (e) {
                              setState({
                                    ...state,
                                    validDesignBefor: "",
                                    designBefor: e.target?.result as string,
                                    fileDesignBefor: file
                              })
                        }
                        reader.readAsDataURL(file)
                        break;
                  case "Hình mặt sau":
                        reader.onload = function (e) {
                              setState({
                                    ...state,
                                    validDesignAfter: "",
                                    designAfter: e.target?.result as string,
                                    fileDesignAfter: file
                              })
                        }
                        reader.readAsDataURL(file)
                        break;
            }

      }
      let array = [
            { type: "Mặt trước", img: state.imgBefor, ref: imgBeforRef, valid: state.validBefor },
            { type: "Mặt sau", img: state.imgAfter, ref: imgAfterRef, valid: state.validAfter },
            { type: "Hình mặt trước", img: state.designBefor, ref: designBeforRef, valid: state.validDesignBefor },
            { type: "Hình mặt sau", img: state.designAfter, ref: designAfterRef, valid: state.validDesignAfter }
      ]
      const onSubmit = async () => {
            setState({
                  ...state,
                  buttonSubmit: 'Đang tạo thiết kế'
            })
            if (state.imgBefor === "") {
                  setState({
                        ...state,
                        validBefor: "Vui lòng upload thiết kế"
                  })
                  return
            }
            if (state.imgAfter === "") {
                  setState({
                        ...state,
                        validAfter: "Vui lòng upload thiết kế"
                  })
                  return
            }
            if (state.designBefor === "") {
                  setState({
                        ...state,
                        validDesignBefor: "Vui lòng upload thiết kế"
                  })
                  return
            }
            if (state.designAfter === "") {
                  setState({
                        ...state,
                        validDesignAfter: "Vui lòng upload thiết kế"
                  })
                  return
            }
            const formData1 = new FormData()
            formData1.append('file', state.fileBefor)
            const formData2 = new FormData()
            formData2.append('file', state.fileAfter)
            const formData3 = new FormData()
            formData3.append('file', state.fileDesignBefor)
            const formData4 = new FormData()
            formData4.append('file', state.fileDesignAfter)
            const [file1, file2, file3, file4] = await Promise.all([
                  ApiService.uploadFile(formData1),
                  ApiService.uploadFile(formData2),
                  ApiService.uploadFile(formData3),
                  ApiService.uploadFile(formData4)
            ])
            console.log(file1);

            if (!file1 || !file2 || !file3 || !file4) {
                  setState({
                        ...state,
                        buttonSubmit: "Có lõi xảy ra,vui lòng thử lại"
                  })
                  return
            }
            ApiService.createProductDetail({
                  product_id: prop.product_id,
                  photo_befor: {
                        id: file1.data.payload.id
                  },
                  photo_after: {
                        id: file2.data.payload.id
                  },
                  photo_design_befor: {
                        id: file3.data.payload.id
                  },
                  photo_design_after: {
                        id: file4.data.payload.id
                  }
            }).then((response) => {
                  if (response.status === 201) {
                        setState({
                              ...state,
                              buttonSubmit: "Tạo thành công"
                        })
                        window.location.href = `/design/product-detail/${prop.product_id}`
                  }
            })


      }


      return (
            <Dialog
                  open={prop.isOpen}
                  onClose={() => prop.onClose()}
            >
                  <DialogTitle style={{ display: 'flex', justifyContent: 'center' }}>
                        <h5 style={{ fontWeight: 1 }}>Tạo thiết kế mới</h5>

                  </DialogTitle>
                  <DialogContent >
                        <div className='row wow'  >
                              {
                                    array.map((x, y) =>
                                          <div key={y} className="" style={{ width: '50%', height: '100%', marginTop: 5 }} >

                                                <h5 style={{ display: 'flex', justifyContent: 'center', fontWeight: 1 }}>{x.type}</h5>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '96%', height: '280px' }}>
                                                      {
                                                            x.img === "" &&
                                                            <div className=' d-lg-table'>
                                                                  <button
                                                                        type="button"
                                                                        id="get_file"
                                                                        className="btn-main"
                                                                        style={{ borderRadius: 10 }}
                                                                        onClick={() => clickUploadFile(x.type)}
                                                                  >
                                                                        Upload
                                                                        <input type="file" id="upload_file" ref={x.ref} onChange={(event) => handleFileSeclet(event, x.type)} />

                                                                  </button>
                                                                  <div style={{ color: "red", marginLeft: 3, fontSize: '14px', display: 'flex', justifyContent: 'center' }}>{x.valid}</div>
                                                            </div>

                                                      }

                                                      {
                                                            x.img !== "" &&

                                                            <img
                                                                  src={x.img}
                                                                  alt=""
                                                                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                                                            />

                                                      }

                                                </div>

                                          </div>)
                              }

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                              <div>
                                    <button
                                          type="button"
                                          id="get_file"
                                          className="btn-main"
                                          style={{ borderRadius: 5 }}
                                          onClick={() => {
                                                onSubmit();
                                          }}
                                    >
                                          {state.buttonSubmit}

                                    </button>
                                    {
                                          state.buttonSubmit === "Đang tạo thiết kế" &&
                                          <LinearProgress
                                                color='info'
                                                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                          />
                                    }
                              </div>

                              <button
                                    type="button"
                                    id="get_file"
                                    className="btn-main"
                                    onClick={() => clickCancel()}
                                    style={{ marginLeft: 20, borderRadius: 5 }}
                              >
                                    Thoát
                              </button>
                        </div>



                  </DialogContent>

            </Dialog>
      );
};

export default DialogCreateOneDesign;
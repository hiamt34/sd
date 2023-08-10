import { Item } from '@/pages/design/product-detail';
import { ButtonBase, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useRef, useState } from 'react';
interface props {
      isOpen: boolean
      onClose: () => void
      onSubmit: (data: Item) => void
}

const DialogCreateOneDesign = (prop: props) => {
      const imgBeforRef = useRef<HTMLInputElement | null>(null);
      const imgAfterRef = useRef<HTMLInputElement | null>(null);
      const designBeforRef = useRef<HTMLInputElement | null>(null);
      const designAfterRef = useRef<HTMLInputElement | null>(null);
      const [imgBefor, setImgBefor] = useState("");
      const [imgAfter, setImgAfter] = useState("");
      const [designBefor, setDesignBefor] = useState("");
      const [designAfter, setDesignAfter] = useState("");

      const clickUploadFile = (type: string) => {
            switch (type) {
                  case "Mặt trước áo":
                        if (imgBeforRef.current) {
                              imgBeforRef.current.click()
                        }
                        break;
                  case "Mặt sau áo":
                        if (imgAfterRef.current) {
                              imgAfterRef.current.click()
                        }
                        break;
                  case "Hình mặt trước áo":
                        if (designBeforRef.current) {
                              designBeforRef.current.click()
                        }
                        break;
                  case "Hình mặt sau áo":
                        if (designAfterRef.current) {
                              designAfterRef.current.click()
                        }
                        break;


            }

      }

      const clickCancel = () => {
            setImgBefor('')
            setImgAfter('')
            setDesignBefor('')
            setDesignAfter('')
            prop.onClose()
      }


      const handleFileSeclet = (event: any, type: string) => {
            console.log(type);


            const file = event.target.files[0];
            if (!file) {
                  return
            }
            if (!file || file.name.toLowerCase().lastIndexOf('.') === -1) {
                  return
            }
            const fileExtension: string = file.name.split('.').pop().toLowerCase()
            console.log(fileExtension === 'jpg');
            if (fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'gif') {
                  return
            }

            console.log(2);

            const formData = new FormData()
            formData.append('files', file)
            switch (type) {
                  case "Mặt trước áo":
                        setImgBefor(URL.createObjectURL(file))
                        break;
                  case "Mặt sau áo":
                        setImgAfter(URL.createObjectURL(file))
                        break;
                  case "Hình mặt trước áo":
                        setDesignBefor(URL.createObjectURL(file))
                        break;
                  case "Hình mặt sau áo":
                        setDesignAfter(URL.createObjectURL(file))
                        break;
            }

      }
      let array = [
            { type: "Mặt trước áo", img: imgBefor, ref: imgBeforRef },
            { type: "Mặt sau áo", img: imgAfter, ref: imgAfterRef },
            { type: "Hình mặt trước áo", img: designBefor, ref: designBeforRef },
            { type: "Hình mặt sau áo", img: designAfter, ref: designAfterRef }
      ]


      return (
            <Dialog
                  open={prop.isOpen}
                  onClose={() => prop.onClose()}


            >
                  <DialogTitle style={{ display: 'flex', justifyContent: 'center' }}>
                        <h5>Tạo thiết kế mới</h5>
                  </DialogTitle>
                  <DialogContent >
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                              {
                                    array.map((x) =>
                                          <div key={Math.random()} className="" style={{ margin: 15, width: '40%', height: '45%' }} >

                                                <h5 style={{ display: 'flex', justifyContent: 'center' }}>{x.type}</h5>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'dashed', width: '240px', height: '300px' }}>
                                                      {
                                                            x.img === "" &&
                                                            <ButtonBase
                                                                  type="button"
                                                                  id="get_file"
                                                                  className="btn-main"
                                                                  style={{ borderRadius: 10 }}
                                                                  onClick={() => clickUploadFile(x.type)}
                                                            >
                                                                  Upload
                                                            </ButtonBase>
                                                      }

                                                      {
                                                            x.img !== "" &&

                                                            <img
                                                                  src={x.img}
                                                                  alt=""
                                                                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                                                            />

                                                      }
                                                      <input type="file" id="upload_file" ref={x.ref} onChange={(event) => handleFileSeclet(event, x.type)} />

                                                </div>

                                          </div>)
                              }

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                              <ButtonBase
                                    type="button"
                                    id="get_file"
                                    className="btn-main"
                                    style={{ borderRadius: 10 }}
                                    onClick={() => {
                                          prop.onSubmit({
                                                id: "12345",
                                                order: 1,
                                                status: 'Đang phe duyệt',
                                                imgBefor: array.find((x) => x.type === "Mặt trước áo")?.img as string,
                                                imgDesignBefor: array.find((x) => x.type === "Hình mặt trước áo")?.img as string,
                                                imgAfter: array.find((x) => x.type === "Mặt sau áo")?.img as string,
                                                imgDesignAfter: array.find((x) => x.type === "Hình mặt sau áo")?.img as string,

                                          });
                                          prop.onClose();
                                          setImgBefor('');
                                          setImgAfter('');
                                          setDesignBefor('');
                                          setDesignAfter('');
                                          array = [{ type: "Mặt trước áo", img: imgBefor, ref: imgBeforRef },
                                          { type: "Mặt sau áo", img: imgAfter, ref: imgAfterRef },
                                          { type: "Hình mặt trước áo", img: designBefor, ref: designBeforRef },
                                          { type: "Hình mặt sau áo", img: designAfter, ref: designAfterRef }]
                                    }}
                              >
                                    Tạo thiếT kế
                              </ButtonBase>
                              <ButtonBase
                                    type="button"
                                    id="get_file"
                                    className="btn-main"
                                    onClick={() => clickCancel()}
                                    style={{ marginLeft: 20, borderRadius: 10 }}
                              >
                                    Thoát
                              </ButtonBase>
                        </div>



                  </DialogContent>

            </Dialog>
      );
};

export default DialogCreateOneDesign;
import { ButtonBase } from "@mui/material"
import Link from "next/link"
import { User } from "./product"
import { ProductDetail, ProductDetailStatus } from "@/services/api/inteface/product_detail.interface"
import Config from "@/config"
import { useEffect, useState } from "react";
interface Props {
      item: ProductDetail
}
interface State {
      item: ProductDetail
}
export const ProductItemDetail = (props: Props) => {
      const [state, setState] = useState<State>({
            item: props.item
      })

      useEffect(() => {
            $(".nft__item").mouseenter(function () {
                  const cover = jQuery(this).find('.nft__item_extra');
                  cover.css("visibility", "visible");
                  cover.css("opacity", "1");

            });

            $(".nft__item").mouseleave(function () {
                  const cover = jQuery(this).find('.nft__item_extra');
                  cover.css("visibility", "hidden");
                  cover.css("opacity", "0");

            });
      }, [])

      return (
            <div className="nft__item">
                  <h5>Thiết kế số {props.item.id}</h5>
                  <div className="nft__item_wrap" style={{ height: '250px' }}>
                        <div className="nft__item_extra">
                              <img
                                    className=""
                                    src={state.item.photo_after.path}
                                    alt=""
                              />
                        </div>
                        <img
                              src={state.item.photo_befor.path}
                              className=" "
                              alt=""
                        />
                  </div>
                  <div className="nft__item_info">
                        <div className="d-flex align-items-lg-center">
                              <h4>Trạng thái: </h4>
                              <h4 style={{ fontWeight: 1, marginLeft: 3 }}>{props.item.status === ProductDetailStatus.Pending ? " Đang xét duyệt" : " Xét duyệt xong"}</h4>
                        </div>

                        <div className="d-flex col-lg-12 col-md-6 col-sm-6 col-xs-12 justify-content-center">
                              {/* <div style={{ width: '40%', margin: 5 }}>
                                    <ButtonBase
                                          type="button"
                                          className="btn-main"
                                          style={{ borderRadius: 10, backgroundColor: 'black' }}
                                    >
                                          Sửa
                                    </ButtonBase>

                              </div>

                              <div style={{ width: '40%', margin: 5 }}>
                                    <ButtonBase
                                          type="button"
                                          className="btn-main"
                                          style={{ borderRadius: 10, backgroundColor: 'black' }}
                                    >
                                          Xoá
                                    </ButtonBase>
                              </div> */}

                        </div>

                  </div>
            </div>
      )
}
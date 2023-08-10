import { ButtonBase } from "@mui/material"
import Link from "next/link"

export const ItemDesign = () => {
      return (
            <div className="nft__item style-2">
                  <h5>Thiết kế số 1</h5>
                  <div className="nft__item_wrap">
                        <div className="nft__item_extra">
                              <div className="nft__item_buttons">
                                    <img
                                          className="lazy"
                                          src="images/author/author-8.jpg"
                                          alt=""
                                    />
                              </div>
                        </div>
                        <Link href={{ pathname: 'products/1' }}>
                              <div className="d-placeholder" />
                              <img
                                    src="images/items/anim-4.webp"
                                    className="lazy nft__item_preview"
                                    alt=""
                              />
                        </Link>
                  </div>
                  <div className="nft__item_info">
                        <a href="04_retro-item-details.html">
                              <h4>Trạng thái: Đang xét duyệt</h4>
                        </a>
                        <div className="nft__item_click">
                              <span />
                        </div>
                        <div className="nft__item_price">
                              <ButtonBase
                                    type="button"
                                    className="btn-main"
                                    style={{ margin: 10, borderRadius: 10 }}
                              >
                                    Sửa
                              </ButtonBase>
                              <ButtonBase
                                    type="button"
                                    className="btn-main"
                                    style={{ margin: 10, borderRadius: 10 }}
                              >
                                    Xoá
                              </ButtonBase>
                        </div>

                  </div>
            </div>
      )
}
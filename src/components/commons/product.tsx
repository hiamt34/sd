import Link from "next/link"
import { useEffect, useState } from "react"
export enum User {
      Customer = "Customer",
      Designer = "Designer"
}
export interface prop {
      imgAfter: string
      imgBefor: string
      type: User
      name: string
      height?: number
      price: number
      is_none_name: boolean
      is_show_info?: boolean
      product_id: number
      is_choose?: number
}
export const ProductItem = (prop: prop) => {
      const clickItem = () => window.location.href = "/"

      useEffect(() => {

            const jquery1 = jQuery(".nft_coll")
            jquery1.mouseenter(function () {
                  const cover = jQuery(this).find('.nft__item_extra');
                  cover.css("visibility", "visible");
                  cover.css("opacity", "1");

            });

            const jquery2 = jQuery(".nft_coll")
            jquery2.mouseleave(function () {
                  const cover = jQuery(this).find('.nft__item_extra');
                  cover.css("visibility", "hidden");
                  cover.css("opacity", "0");

            });


      }, [])
      return (
            <>
                  {prop.type === User.Customer &&
                        <div className="nft_coll" style={{ marginBottom: 25, width: '100%', border: `${prop?.is_choose === 1 ? 'solid 5px rgba(12, 0, 12, .4)' : ''}` }}>
                              <div className="nft_wrap">
                                    <Link href={`/products/${prop.product_id}`}>
                                          <div className="nft__item_extra">
                                                <img
                                                      className=""
                                                      src={prop.imgAfter}
                                                      alt=""
                                                      style={{ height: `${prop?.height ? prop.height : 280}px`, width: '100%' }}
                                                />
                                          </div>
                                          <img
                                                src={prop.imgBefor}
                                                className=""
                                                alt=""
                                                style={{ height: `${prop?.height ? prop.height : 270}px`, width: '100%' }}
                                          />

                                    </Link>
                              </div>
                              {
                                    prop.is_show_info ??
                                    <div className="nft_coll_info" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>

                                          <span style={{ color: 'rgb(150, 0, 0)', fontSize: '16px', fontFamily: '', fontWeight: 1, fontStyle: 'oblique' }}>250.000 đ</span>



                                    </div>
                              }

                        </div >
                  }
                  {
                        prop.type === User.Designer &&
                        <>
                              <div className="nft_coll" style={{ marginTop: 15, marginBottom: 10 }} >
                                    <div className="nft_wrap">
                                          <Link href={{ pathname: `/design/product-detail/${prop.product_id}` }}>
                                                <div className="nft__item_extra">
                                                      <img
                                                            className=""
                                                            src={prop.imgAfter}
                                                            alt=""
                                                            style={{ height: "280px", width: '100%' }}
                                                      />
                                                </div>
                                                <img
                                                      src={prop.imgBefor}
                                                      className=""
                                                      alt=""
                                                      style={{ height: "277px", width: '100%' }}
                                                />
                                          </Link>

                                    </div>
                                    {
                                          prop.is_show_info &&
                                          <div className="nft_coll_info" style={{ height: '80px' }}>
                                                <div style={{ height: 20 }}></div>
                                                <span style={{ fontSize: '18px', fontFamily: '', fontStyle: 'normal', marginTop: 20 }}>
                                                      {prop.name}
                                                </span>

                                          </div>
                                    }

                              </div>

                        </>

                  }
            </>


      )
}
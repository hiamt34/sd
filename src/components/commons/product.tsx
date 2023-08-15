import Link from "next/link"
export enum User {
      Customer = "Customer",
      Designer = "Designer"
}
export interface prop {
      showProfileAvatar: boolean
      img: string
      type: User
      name: string
      price: number
      height?: number
      is_none_name: boolean
}
export const Product = (prop: prop) => {
      return (
            <>
                  {prop.type === User.Customer &&
                        <div className="nft_coll" style={{ borderRadius: 20 }}>
                              <div className="nft_wrap">
                                    <Link href={{ pathname: `/products/1` }}>
                                          <img
                                                src={prop.img}
                                                className=""
                                                alt=""
                                                height={prop?.height ?? 300}
                                                style={{ borderRadius: 100 }}
                                          />
                                    </Link>
                              </div>

                              {
                                    prop.showProfileAvatar &&
                                    <div className="nft_coll_pp">
                                          <Link href={{ pathname: `/design/my-profile/` }}>
                                                <img className="lazy pp-coll" src="images/author/author-1.jpg" alt="" />
                                          </Link>
                                          <i className="fa fa-check" />
                                    </div>
                              }
                              {
                                    prop.is_none_name &&
                                    <div className="nft_coll_info" style={{ marginTop: 10 }}>
                                          <Link href={{ pathname: `collection/+${1}` }}>
                                                <h5>{prop.name}</h5>
                                                <br />
                                                <span>Giá: {prop.price}.000 đ</span>
                                          </Link>
                                    </div>
                              }

                        </div>
                  }
                  {prop.type === User.Designer &&
                        <div className="nft_coll" style={{ borderRadius: 20 }} >
                              <div className="nft_wrap">
                                    <Link href={{ pathname: `/design/product-detail` }}>
                                          <img
                                                src={prop.img}
                                                className=""
                                                alt=""
                                                height={300}
                                                style={{ borderRadius: 100 }}
                                          />
                                    </Link>

                              </div>

                              {
                                    prop.showProfileAvatar &&
                                    <div className="nft_coll_pp">
                                          <Link href={{ pathname: `/design/my-profile/` }}>
                                                <img className="lazy pp-coll" src="images/author/author-1.jpg" alt="" />
                                          </Link>
                                          <i className="fa fa-check" />
                                    </div>
                              }

                              <div className="nft_coll_info" style={{ marginTop: 10 }}>
                                    <Link href={{ pathname: `collection/+${1}` }}>
                                          <span>{prop.name}</span>
                                          <br />
                                          <span>Giá: {prop.price} đ</span>

                                    </Link>
                              </div>
                        </div>
                  }
            </>


      )
}
import Link from "next/link"
export enum User {
      Customer = "Customer",
      Designer = "Designer"
}
export interface prop {
      img: string
      type: User
      name: string
      height?: number
      price: number
      is_none_name: boolean
      is_show_info?: boolean
}
export const Product = (prop: prop) => {
      const clickItem = () => window.location.href = "/"
      return (
            <>
                  {prop.type === User.Customer &&
                        <div className="nft_coll" style={{ marginTop: 20 }}>
                              <div className="nft_wrap">
                                    <Link href={{ pathname: `/products/1` }}>
                                          <img
                                                src={prop.img}
                                                className="lazy img-fluid"
                                                alt=""
                                                style={{ height: `${prop.height ? prop.height : 270}px`, width: '100%' }}
                                          />
                                    </Link>
                              </div>
                              {
                                    prop.is_show_info ??
                                    <div className="nft_coll_info" style={{ height: '80px' }}>
                                          <div style={{ height: 10 }}></div>
                                          <span style={{ fontSize: '18px', fontFamily: 'fantasy', fontStyle: 'normal', marginTop: 20 }}>Unisex blackping</span>
                                          <br />
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
                                          <Link href={{ pathname: `/design/product-detail` }}>
                                                <img
                                                      src={prop.img}
                                                      className="lazy img-fluid"
                                                      alt=""
                                                      style={{ height: `${prop.height ? prop.height : 270}px`, width: '100%' }}
                                                />
                                          </Link>

                                    </div>
                                    {
                                          prop.is_show_info &&
                                          <div className="nft_coll_info" style={{ height: '80px' }}>
                                                <div style={{ height: 20 }}></div>
                                                <span style={{ fontSize: '18px', fontFamily: 'fantasy', fontStyle: 'normal', marginTop: 20 }}>
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
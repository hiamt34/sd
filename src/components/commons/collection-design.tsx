import Link from "next/link"
export interface prop {
      showProfileAvatar: boolean
}
export const CollectionDesign = (prop: prop) => {
      return (
            <div className="nft_coll">
                  <div className="nft_wrap">
                        <Link href={{ pathname: `/design/product-detail` }}>
                              <img
                                    src="images/author/author-10.jpg"
                                    className=""
                                    alt=""
                                    height={280}
                                    width={300}
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
                              <h3>Đinh Thiện Quang</h3>
                        </Link>
                        <h6>6 -thiết kế</h6>
                  </div>
            </div>

      )
}
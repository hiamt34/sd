import Link from "next/link"
interface props {
    img_carosel: string
    avatar: string
}
export const Designer = (prop: props) => {
    return (
        <div className="nft_coll">
            <div className="nft_wrap">
                <Link href={{ pathname: `/products/design` }}>
                    <img
                        src={prop.img_carosel}
                        className="lazy img-fluid"
                        alt=""
                        style={{ height: 150 }}
                    />
                </Link>
            </div>
            <div className="nft_coll_pp">
                <Link href={{ pathname: `/products/design` }}>
                    <img className="lazy pp-coll" src={prop.avatar} alt="" />
                </Link>
                <i className="fa fa-check" />
            </div>
            <div className="nft_coll_info">
                <Link href={{ pathname: `/design/my-profile` }}>
                    <h4>Đinh Thiện Quang</h4>
                </Link>
                <span>192 - mẫu thiết kế</span>
            </div>
        </div>

    )
}
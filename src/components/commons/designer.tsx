import Config from "@/config"
import { Designer } from "@/services/api/inteface/designer.interface"
import Link from "next/link"
interface props {
    designer: Designer
}
export const DesignerItem = (prop: props) => {
    return (
        <div className="nft_coll">
            <div className="nft_wrap">
                <Link href={{ pathname: `/products/design/${prop.designer.id}` }}>
                    <img
                        src={prop.designer.banner ? `${Config.apiDomain}${prop.designer.banner.path}` : `${Config.apiDomain}${prop.designer.photo_banner_default}`}
                        className="lazy img-fluid"
                        alt=""
                        style={{ height: 150 }}
                    />
                </Link>
            </div>
            <div className="nft_coll_pp">
                <Link href={{ pathname: `/products/design` }}>
                    <img
                        className="lazy pp-coll"
                        src={prop.designer.photo ? `${Config.apiDomain}${prop.designer.photo.path}` : `${Config.apiDomain}${prop.designer.photo_avatar_default}`}
                        alt=""
                        style={{ height: 60 }} />
                </Link>
                <i className="fa fa-check" />
            </div>
            <div className="nft_coll_info">
                <Link href={{ pathname: `/products/design/${prop.designer.id}` }}>
                    <h4>{prop.designer.firstName}</h4>
                </Link>
                <span>{prop.designer.count_products} - mẫu thiết kế</span>
            </div>
        </div>

    )
}
import Link from "next/link"

export const ItemCollection = () => {
    return (
        <div className="nft_coll">
            <div className="nft_wrap">
                <Link href={{ pathname: `design/collection/${1}` }}>
                    <img
                        src="images/collections/coll-1.jpg"
                        className="lazy img-fluid"
                        alt=""
                    />
                </Link>
            </div>
            <div className="nft_coll_pp">
                <Link href={{ pathname: `collection/+${1}` }}>
                    <img className="lazy pp-coll" src="images/author/author-1.jpg" alt="" />
                </Link>
                <i className="fa fa-check" />
            </div>
            <div className="nft_coll_info">
                <Link href={{ pathname: `collection/+${1}` }}>
                    <h4>Đinh Thiện Quang</h4>
                </Link>
                <span>192 - mẫu thiết kế</span>
            </div>
        </div>

    )
}
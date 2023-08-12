import { ButtonBase } from "@mui/material"
import Link from "next/link"

export const ItemCustomer = () => {
    return (
        <div className="nft__item style-2">
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
            <div className="nft__item_info" style={{ marginLeft: 0 }}>
                <a href="04_retro-item-details.html">
                    <h4>Mẫu số 1</h4>
                </a>
                <div className="nft__item_click">
                    <span />
                </div>
                <div className="nft__item_price">
                    Giá<span>120.000 đ</span>
                </div>

                Lượt thích: <span>390</span>
                {/* <i className="fa fa-heart" /> */}
                <div className="nft__item_action">
                    <ButtonBase
                        type="button"
                        className="btn-main"
                        style={{ width: '45%', borderRadius: 10 }}
                    >
                        Mua
                    </ButtonBase>
                    <ButtonBase
                        type="button"
                        className="btn-main"
                        style={{ marginLeft: 15, borderRadius: 10 }}
                    >
                        Chi tiết
                    </ButtonBase>
                </div>

            </div>
        </div>
    )
}
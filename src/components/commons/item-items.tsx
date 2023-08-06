import Link from "next/link"

export const ItemItems = () => {
    return (
        <div className="nft__item style-2">
            <div className="author_list_pp">
                <a
                    href="04_retro-author.html"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Creator: Franklin Greer"
                >
                    <img
                        className="lazy"
                        src="images/author/author-9.jpg"
                        alt=""
                    />
                    <i className="fa fa-check" />
                </a>
            </div>
            <div className="nft__item_wrap">
                <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                        <button >
                            Buy Now
                        </button>
                        {/* <div className="nft__item_share">
                            <h4>Share</h4>
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                target="_blank"
                            >
                                <i className="fa fa-facebook fa-lg" />
                            </a>
                            <a
                                href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                target="_blank"
                            >
                                <i className="fa fa-twitter fa-lg" />
                            </a>
                            <a href="mailto:?subject=I wanted you to see this site&body=Check out this site https://madebydesignesia.com/themes">
                                <i className="fa fa-envelope fa-lg" />
                            </a>
                        </div> */}
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
                    <h4>The Truth</h4>
                </a>
                <div className="nft__item_click">
                    <span />
                </div>
                <div className="nft__item_price">
                    0.06 ETH<span>1/20</span>
                </div>
                <div className="nft__item_action">
                    <a href="#">Place a bid</a>
                </div>
                <div className="nft__item_like">
                    <i className="fa fa-heart" />
                    <span>26</span>
                </div>
            </div>
        </div>
    )
}
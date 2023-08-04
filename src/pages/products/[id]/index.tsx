import ClientLayout from "@/layouts"

const ProductDetailPage = () => {
    return (
        <ClientLayout is_no_footer={true} type_class="no-top no-bottom">
            <section id="nft-item-details" aria-label="section" className="sm-mt-0">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center">
                            <div className="d-carousel ">
                                <div
                                    id="item-carousel-big-type-2"
                                    className="owl-carousel wow fadeIn"
                                >
                                    <div className="nft_pic style-2">
                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/carousel/crs-6.jpg"
                                                className="lazy img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2">

                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/carousel/crs-5.jpg"
                                                className="lazy img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2">

                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/carousel/crs-4.jpg"
                                                className="lazy img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2">

                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/carousel/crs-1.jpg"
                                                className="lazy img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2">

                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/items/anim-5.webp"
                                                className="lazy img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2">

                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/items/anim-8.webp"
                                                className="lazy img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-arrow-left">
                                    <i className="fa fa-angle-left" />
                                </div>
                                <div className="d-arrow-right">
                                    <i className="fa fa-angle-right" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="item_info">
                                Auctions ends in{" "}
                                <div
                                    className="de_countdown"
                                    data-year={2023}
                                    data-month={8}
                                    data-day={16}
                                    data-hour={8}
                                />
                                <h2>AnimeSailorClub #304</h2>
                                <div className="item_info_counts">
                                    <div className="item_info_type">
                                        <i className="fa fa-image" />
                                        Art
                                    </div>
                                    <div className="item_info_views">
                                        <i className="fa fa-eye" />
                                        250
                                    </div>
                                    <div className="item_info_like">
                                        <i className="fa fa-heart" />
                                        18
                                    </div>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo.
                                </p>
                                <div className="d-flex flex-row">
                                    <div className="mr40">
                                        <h6>Creator</h6>
                                        <div className="item_author">
                                            <div className="author_list_pp">
                                                <a href="04_retro-author.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-1.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="04_retro-author.html">Monica Lucas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Collection</h6>
                                        <div className="item_author">
                                            <div className="author_list_pp">
                                                <a href="04_retro-collection.html">
                                                    <img
                                                        className="lazy"
                                                        src="images/collections/coll-thumbnail-1.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="04_retro-collection.html">AnimeSailorClub</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-40" />
                                <div className="de_tab tab_simple">
                                    <ul className="de_nav">
                                        <li className="active">
                                            <span>Details</span>
                                        </li>
                                        <li>
                                            <span>Bids</span>
                                        </li>
                                        <li>
                                            <span>History</span>
                                        </li>
                                    </ul>
                                    <div className="de_tab_content">
                                        <div className="tab-1">
                                            <h6>Owner</h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-10.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="author_list_info">
                                                    <a href="04_retro-author.html">Stacy Long</a>
                                                </div>
                                            </div>
                                            <div className="spacer-40" />
                                            <h6>Properties</h6>
                                            <div className="row gx-2">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Background</h5>
                                                        <h4>Yellowish Sky</h4>
                                                        <span>85% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Eyes</h5>
                                                        <h4>Purple Eyes</h4>
                                                        <span>14% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Nose</h5>
                                                        <h4>Small Nose</h4>
                                                        <span>45% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Mouth</h5>
                                                        <h4>Smile Red Lip</h4>
                                                        <span>61% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Neck</h5>
                                                        <h4>Pink Ribbon</h4>
                                                        <span>27% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Hair</h5>
                                                        <h4>Pink Short</h4>
                                                        <span>35% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Accessories</h5>
                                                        <h4>Heart Necklace</h4>
                                                        <span>33% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Hat</h5>
                                                        <h4>Cute Panda</h4>
                                                        <span>62% have this trait</span>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <a href="#" className="nft_attr">
                                                        <h5>Clothes</h5>
                                                        <h4>Casual Purple</h4>
                                                        <span>78% have this trait</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="spacer-30" />
                                        </div>
                                        <div className="tab-2">
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-1.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid accepted <b>0.005 ETH</b>
                                                    <span>
                                                        by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-2.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.005 ETH</b>
                                                    <span>
                                                        by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-3.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.004 ETH</b>
                                                    <span>
                                                        by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-4.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.003 ETH</b>
                                                    <span>
                                                        by <b>Lori Hart</b> at 6/12/2021, 12:57 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-3">
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-5.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.005 ETH</b>
                                                    <span>
                                                        by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-1.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid accepted <b>0.005 ETH</b>
                                                    <span>
                                                        by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-2.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.005 ETH</b>
                                                    <span>
                                                        by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-3.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.004 ETH</b>
                                                    <span>
                                                        by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p_list">
                                                <div className="p_list_pp">
                                                    <a href="04_retro-author.html">
                                                        <img
                                                            className="lazy"
                                                            src="images/author/author-4.jpg"
                                                            alt=""
                                                        />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="p_list_info">
                                                    Bid <b>0.003 ETH</b>
                                                    <span>
                                                        by <b>Lori Hart</b> at 6/12/2021, 12:57 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="spacer-10" />
                                    <h6>Price</h6>
                                    <div className="nft-item-price">
                                        <img src="images/misc/ethereum.svg" alt="" />
                                        <span>0.059</span>($253.67)
                                    </div>
                                    {/* Button trigger modal */}
                                    <a
                                        href="#"
                                        className="btn-main btn-lg"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buy_now"
                                    >
                                        Mua ngay
                                    </a>
                                    &nbsp;
                                    <a
                                        href="#"
                                        className="btn-main btn-lg btn-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#place_a_bid"
                                    >
                                        Hướng dẫn chọn size
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="modal fade"
                id="buy_now"
                tabIndex={-1}
                aria-labelledby="buy_now"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered de-modal">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                        <div className="modal-body">
                            <div className="p-3 form-border">
                                <h3>Checkout</h3>
                                You are about to purchase a <b>The Era of 90s</b> from{" "}
                                <b>Monica Lucas</b>
                                <div className="spacer-single" />
                                <h6>
                                    Enter quantity. <span className="id-color-2">10 available</span>
                                </h6>
                                <input
                                    type="text"
                                    name="buy_now_qty"
                                    id="buy_now_qty"
                                    className="form-control"
                                    defaultValue={1}
                                />
                                <div className="spacer-single" />
                                <div className="de-flex">
                                    <div>Your balance</div>
                                    <div>
                                        <b>10.67856 ETH</b>
                                    </div>
                                </div>
                                <div className="de-flex">
                                    <div>Service fee 2.5%</div>
                                    <div>
                                        <b>0.00325 ETH</b>
                                    </div>
                                </div>
                                <div className="de-flex">
                                    <div>You will pay</div>
                                    <div>
                                        <b>0.013325 ETH</b>
                                    </div>
                                </div>
                                <div className="spacer-single" />
                                <a
                                    href="03_grey-wallet.html"
                                    target="_blank"
                                    className="btn-main btn-fullwidth"
                                >
                                    Add funds
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* place a bid */}
            <div
                className="modal fade"
                id="place_a_bid"
                tabIndex={-1}
                aria-labelledby="place_a_bid"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered de-modal">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                        <div className="modal-body">
                            <div className="p-3 form-border">
                                <h3>Place a Bid</h3>
                                You are about to place a bid for <b>The Era of 90s</b> from{" "}
                                <b>Monica Lucas</b>
                                <div className="spacer-single" />
                                <h6>Your bid (ETH)</h6>
                                <input
                                    type="text"
                                    name="bid_value"
                                    id="bid_value"
                                    className="form-control"
                                    placeholder="Enter bid"
                                />
                                <div className="spacer-single" />
                                <h6>
                                    Enter quantity. <span className="id-color-2">10 available</span>
                                </h6>
                                <input
                                    type="text"
                                    name="bid_qty"
                                    id="bid_qty"
                                    className="form-control"
                                    defaultValue={1}
                                />
                                <div className="spacer-single" />
                                <div className="de-flex">
                                    <div>Your bidding balance</div>
                                    <div>
                                        <b>0.013325 ETH</b>
                                    </div>
                                </div>
                                <div className="de-flex">
                                    <div>Your balance</div>
                                    <div>
                                        <b>10.67856 ETH</b>
                                    </div>
                                </div>
                                <div className="de-flex">
                                    <div>Service fee 2.5%</div>
                                    <div>
                                        <b>0.00325 ETH</b>
                                    </div>
                                </div>
                                <div className="de-flex">
                                    <div>You will pay</div>
                                    <div>
                                        <b>0.013325 ETH</b>
                                    </div>
                                </div>
                                <div className="spacer-single" />
                                <a
                                    href="03_grey-wallet.html"
                                    target="_blank"
                                    className="btn-main btn-fullwidth"
                                >
                                    Place a bid
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    )
}

export default ProductDetailPage
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
                                    <div className="nft_pic style-2" >
                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/mau_ao/ao_don/aodon-1.jpg"
                                                className="lazy img-fluid"
                                                alt=""
                                                style={{ height: 600 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2">
                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/mau_ao/ao_don/aodon-2.jpg"
                                                className="lazy img-fluid"
                                                alt=""
                                                style={{ height: 600 }}
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
                                <h2>Mẫu thiết kế: Unisex red</h2>
                                <div className="item_info_counts">
                                    <div className="item_info_views">
                                        <i className="fa fa-eye" />
                                        250
                                    </div>
                                    <div className="item_info_like">
                                        <i className="fa fa-heart" />
                                        18
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="mr40">
                                        <h6>Designer</h6>
                                        <div className="item_author">
                                            <div className="author_list_pp">
                                                <a href="products/design">
                                                    <img
                                                        className="lazy"
                                                        src="images/author/author-1.jpg"
                                                        alt=""
                                                    />
                                                    <i className="fa fa-check" />
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="04_retro-author.html">Đinh Thiện Quang</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-40" />
                                <div className="de_tab tab_simple">


                                    <div className="spacer-10" />
                                    <h6>Giá:</h6>
                                    <div className="nft-item-price">
                                        <img src="images/misc/ethereum.svg" alt="" />
                                        <span>200.000 đ</span>
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
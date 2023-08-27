import { Designer } from "@/components/commons/designer";
import { Product, User } from "@/components/commons/product";
import CustomerLayout from "@/layouts/customer_layouts"
import { Checkbox, TextField, withStyles } from "@mui/material"

type IProps = {
    backgroundColor?: string;
}

const ProductDetailPage = () => {
    return (
        <CustomerLayout is_no_footer={true} type_class="no-top no-bottom">
            <section id="nft-item-details" aria-label="section" className="sm-mt-0">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center">
                            <div className="d-carousel ">
                                <div
                                    id="item-carousel-big-type-2"
                                    className="owl-carousel wow fadeIn"
                                >
                                    <div className="nft_pic style-2" style={{ borderRadius: 5 }} >
                                        <div className="nft_pic_wrap">
                                            <img
                                                src="images/mau_ao/ao_don/aodon-1.jpg"
                                                className="lazy img-fluid"
                                                alt=""
                                                style={{ height: 600 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2" style={{ borderRadius: 5 }}>
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


                                    <h5>Hãy lựa chọn thiết kế:</h5>
                                    <div id="collection-carousel-4-cols" className="owl-carousel wow fadeIn">
                                        {
                                            [1, 2, 3, 4, 5, 6,].map((x) => { return (<Product is_show_info={false} is_none_name={false} height={200} name={`Unisex look is the best ${x}`} price={180.000} img={`images/mau_ao/ao_don/aodon-${x}.jpg`} type={User.Customer} />) })
                                        }
                                    </div>
                                    <br />
                                    Số lượng: <TextField
                                        style={{ width: 80 }}
                                        className=""
                                        variant="outlined"
                                        size="small"

                                    />
                                    <br />
                                    Size:  X<Checkbox></Checkbox> L<Checkbox></Checkbox> XL<Checkbox></Checkbox>
                                    <div className="spacer-10" />

                                    <br />
                                    <h6>Giá: 120.000 đ</h6>
                                    <h6>Tổng: 200.000 đ</h6>
                                    <a
                                        href="#"
                                        className="btn-main btn-lg"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buy_now"
                                    >
                                        Mua ngay
                                    </a>
                                    &nbsp;

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
                <div className="modal-dialog modal-dialog-centered de-modal" >
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                        <div className="modal-body" style={{ margin: 20 }}>
                            <div className="p-3 form-border">
                                <h3>Thông tin đơn hàng</h3>
                                Bạn đã đạt mua mẫu số: <b>3</b>
                                <br />
                                Số lượng: <b>10</b>
                                <br />
                                Size: <b>Xl</b>
                                <br />
                                Desinger: <b>Đinh Thiện Quang</b>
                                <div className="spacer-single" />
                                <b>Vui lòng điền thông tin liên hệ để chúng tôi chăm sóc bạn tốt hơn</b>
                                <div className="spacer-single" />
                                <div className="de-flex">
                                    <div>Số điện thoại</div>
                                    <div>
                                        <input
                                            className=""
                                            style={{ height: 30 }}

                                        />
                                    </div>
                                </div>
                                <div className="de-flex" style={{ marginTop: 10 }}>
                                    <div>Địa chỉ</div>
                                    <div>
                                        <input
                                            className=""
                                            style={{ height: 30 }}
                                        />
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
        </CustomerLayout>
    )
}

export default ProductDetailPage
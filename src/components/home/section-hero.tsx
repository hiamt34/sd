export const SectionHero = () => {
    return (
        <section id="section-hero" aria-label="section" className="pt60">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="spacer-single" />

                        <div className="spacer-10" />
                        <h1 className="wow fadeInUp" data-wow-delay=".75s">
                            Cung cấp mẫu áo thiết kế chuyên nghiệp
                        </h1>
                        <p className="wow fadeInUp lead" data-wow-delay="1s">
                            Unit of data stored on a digital ledger, called a blockchain, that
                            certifies a digital asset to be unique and therefore not
                            interchangeable
                        </p>
                        <div className="spacer-10" />
                        <div className="row">
                            <div className="spacer-single" />
                            <div className="row">
                                <div
                                    className="col-lg-4 col-md-6 col-sm-4 wow fadeInRight mb30"
                                    data-wow-delay="1.1s"
                                >
                                    <div className="de_count text-left">
                                        <h3>
                                            <span>1000</span>
                                        </h3>
                                        <h5 className="id-color">Mẫu sản phẩm</h5>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 col-sm-4 wow fadeInRight mb30"
                                    data-wow-delay="1.4s"
                                >
                                    <div className="de_count text-left">
                                        <h3>
                                            <span>27</span>k
                                        </h3>
                                        <h5 className="id-color">Lượt mua</h5>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 col-sm-4 wow fadeInRight mb30"
                                    data-wow-delay="1.7s"
                                >
                                    <div className="de_count text-left">
                                        <h3>
                                            <span>1</span>k
                                        </h3>
                                        <h5 className="id-color">Designer</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 xs-hide">
                        <div className="">
                            <div
                                id="item-carousel-big-type-2"
                                className="owl-carousel wow fadeIn"
                            >
                                <div className="nft_pic style-2">
                                    <a href="04_retro-item-details.html">
                                        <span className="nft_pic_info">
                                            <span className="nft_pic_title">The Era of 90s</span>
                                            <span className="nft_pic_by">Gayle Hicks</span>
                                        </span>
                                    </a>
                                    <div className="nft_pic_wrap">
                                        <img
                                            src="images/mau_ao/bia/anhbia_1.jpg"
                                            className="lazy img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="nft_pic style-2">
                                    <a href="04_retro-item-details.html">
                                        <span className="nft_pic_info">
                                            <span className="nft_pic_title">Live Arts</span>
                                            <span className="nft_pic_by">Nicholas Daniels</span>
                                        </span>
                                    </a>
                                    <div className="nft_pic_wrap">
                                        <img
                                            src="images/mau_ao/bia/anhbia_2.jpg"
                                            className="lazy img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="nft_pic style-2">
                                    <a href="04_retro-item-details.html">
                                        <span className="nft_pic_info">
                                            <span className="nft_pic_title">Red Ocean</span>
                                            <span className="nft_pic_by">Monica Lucas</span>
                                        </span>
                                    </a>
                                    <div className="nft_pic_wrap">
                                        <img
                                            src="images/mau_ao/bia/anhbia_3.jpg"
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
                </div>
            </div>
        </section>
    )
}
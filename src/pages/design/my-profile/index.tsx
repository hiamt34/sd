import ClientLayout from "@/layouts";

const MyProfilePage = () => {
  return (
    <ClientLayout type_class="no-bottom">
      <section aria-label="section" className="pt40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d_profile de-flex">
                <div className="de-flex-col">
                  <div className="profile_avatar">
                    <img
                      src="images/author_single/author_thumbnail.jpg"
                      alt=""
                    />
                    <i className="fa fa-check" />
                    <div className="profile_name">
                      <h4>
                        Monica Lucas
                        <span className="profile_username">@monicaaa</span>
                        <span id="wallet" className="profile_wallet">
                          DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
                        </span>
                        <button id="btn_copy" title="Copy Text">
                          Copy
                        </button>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="profile_follow de-flex">
                  <div className="de-flex-col">
                    <div className="profile_follower">500 followers</div>
                  </div>
                  <div className="de-flex-col">
                    <a href="#" className="btn-main">
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="de_tab tab_simple">
                <ul className="de_nav">
                  <li className="active">
                    <span>On Sale</span>
                  </li>
                  <li>
                    <span>Created</span>
                  </li>
                  <li>
                    <span>Liked</span>
                  </li>
                </ul>
                <div className="de_tab_content">
                  <div className="tab-1">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="nft__item style-2">
                          <div
                            className="de_countdown"
                            data-year={2023}
                            data-month={8}
                            data-day={16}
                            data-hour={8}
                          />
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
                          <div className="nft__item_wrap">
                            <div className="nft__item_extra">
                              <div className="nft__item_buttons">
                                <button>Buy Now</button>
                                <div className="nft__item_share">
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
                                </div>
                              </div>
                            </div>
                            <a href="04_retro-item-details.html">
                              <img
                                src="images/author_single/porto-1.jpg"
                                className="lazy nft__item_preview"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="nft__item_info">
                            <a href="04_retro-item-details.html">
                              <h4>Pinky Ocean</h4>
                            </a>
                            <div className="nft__item_click">
                              <span />
                            </div>
                            <div className="nft__item_price">
                              0.08 ETH<span>1/20</span>
                            </div>
                            <div className="nft__item_action">
                              <a href="#">Place a bid</a>
                            </div>
                            <div className="nft__item_like">
                              <i className="fa fa-heart" />
                              <span>50</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-2">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="nft__item style-2">
                          <div
                            className="de_countdown"
                            data-year={2023}
                            data-month={8}
                            data-day={14}
                            data-hour={8}
                          />
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
                          <div className="nft__item_wrap">
                            <div className="nft__item_extra">
                              <div className="nft__item_buttons">
                                <button>Buy Now</button>
                                <div className="nft__item_share">
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
                                </div>
                              </div>
                            </div>
                            <a href="04_retro-item-details.html">
                              <img
                                src="images/author_single/porto-3.jpg"
                                className="lazy nft__item_preview"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="nft__item_info">
                            <a href="04_retro-item-details.html">
                              <h4>Three Donuts</h4>
                            </a>
                            <div className="nft__item_click">
                              <span />
                            </div>
                            <div className="nft__item_price">
                              0.05 ETH<span>1/11</span>
                            </div>
                            <div className="nft__item_action">
                              <a href="#">Place a bid</a>
                            </div>
                            <div className="nft__item_like">
                              <i className="fa fa-heart" />
                              <span>97</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-3">
                    <div className="row">
                      <div className="col-md-12">
                        {/* <div className="items_filter text-center">
                                    <div id="filter_by_duration" className="dropdown">
                                        <a href="#" className="btn-selector">
                                            Last 7 days
                                        </a>
                                        <ul>
                                            <li>
                                                <span>Last 24 hours</span>
                                            </li>
                                            <li className="active">
                                                <span>Last 7 days</span>
                                            </li>
                                            <li>
                                                <span>Last 30 days</span>
                                            </li>
                                            <li>
                                                <span>All time</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="filter_by_category" className="dropdown">
                                        <a href="#" className="btn-selector">
                                            All categories
                                        </a>
                                        <ul>
                                            <li className="active">
                                                <span>All categories</span>
                                            </li>
                                            <li>
                                                <span>Art</span>
                                            </li>
                                            <li>
                                                <span>Music</span>
                                            </li>
                                            <li>
                                                <span>Domain Names</span>
                                            </li>
                                            <li>
                                                <span>Virtual World</span>
                                            </li>
                                            <li>
                                                <span>Trading Cards</span>
                                            </li>
                                            <li>
                                                <span>Collectibles</span>
                                            </li>
                                            <li>
                                                <span>Sports</span>
                                            </li>
                                            <li>
                                                <span>Utility</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                        <table className="table de-table table-rank">
                          <thead>
                            <tr>
                              <th scope="col">Sản Phẩm</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Loại</th>
                              <th scope="col">Biến động</th>
                              <th scope="col">Trạng thái</th>
                              <th scope="col">Ghi chú</th>
                              <th scope="col">Tài khoản gốc</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img
                                    className="lazy"
                                    src="images/author/author-1.jpg"
                                    alt=""
                                  />
                                  <i className="fa fa-check" />
                                </div>
                                Abstraction
                              </th>
                              <td>10</td>
                              <td>CASHIN</td>
                              <td className="d-plus">+10K VNĐ</td>
                              <td>Thành Công</td>
                              <td></td>
                              <td>1,000K VNĐ</td>
                            </tr>
                            <tr>
                              <th scope="row"></th>
                              <td></td>
                              <td>CASHOUT</td>
                              <td className="d-min">-100K VNĐ</td>
                              <td>Thành Công</td>
                              <td>Mã Bill: 123456</td>
                              <td>900K VNĐ</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="spacer-double" />
                        <ul className="pagination justify-content-center">
                          <li className="active">
                            <a href="#">1 - 20</a>
                          </li>
                          <li>
                            <a href="#">21 - 40</a>
                          </li>
                          <li>
                            <a href="#">41 - 60</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
};
export default MyProfilePage;

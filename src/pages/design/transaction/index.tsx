import ClientLayout from "@/layouts"

const TransactionPage = () => {
    return (
        <ClientLayout >
            <>
                <section id="subheader">
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1>Lịch sử biến động tài khoản</h1>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* section close */}
                {/* section begin */}
                <section aria-label="section">
                    <div className="container">
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
                                            <th scope="row">

                                            </th>
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
                </section>
            </>

        </ClientLayout>
    )

}
export default TransactionPage
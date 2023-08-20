export const TableMyProfile = () => {
    return (
        <table className="table de-table table-rank " style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
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
    )
}
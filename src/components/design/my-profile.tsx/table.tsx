export const TableWallet = () => {
    return (
        <table className="table de-table table-rank " style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <thead>
                <tr>
                    <th scope="col">Ngày</th>
                    <th scope="col">Mã áo</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Biến động</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Ghi chú</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12/10/2023</td>
                    <td>A10001</td>
                    <td>5</td>
                    <td className="d-plus">+10K VNĐ</td>
                    <td>Thành Công</td>
                    <td></td>
                </tr>
                <tr>
                    <td>10/10/2023</td>
                    <td></td>
                    <td></td>
                    <td className="d-min">-100K VNĐ</td>
                    <td>Thành Công</td>
                    <td>Mã Bill: 123456</td>
                </tr>
            </tbody>
        </table>
    )
}
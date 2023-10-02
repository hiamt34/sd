import { FilterWalletHistory } from '@/components/commons/filter_wallet'
import { ApiService } from '@/services/api/http'
import { GetTranSactionDto, Transaction, TransactionStatus, TransactionType } from '@/services/api/inteface/transation.interface'
import { RootState } from '@/store/store'
import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
interface Props {
    user_id: number
}
interface State {
    transactionsRender: Array<Transaction>
    transactionAll: Array<Transaction>
    totalPage: number
    totalItem: number
    page: number
    filterMonth: number
    filterYear: number
}
export const TableWallet = (props: Props) => {
    const [state, setState] = useState<State>({
        transactionsRender: [],
        transactionAll: [],
        totalPage: 0,
        totalItem: 0,
        page: 1,
        filterMonth: 0,
        filterYear: (new Date()).getFullYear()
    })
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    useEffect(() => {
        ApiService.getTransactions({ page: 1, pageSize: 5 }).then((response) => {
            if (response.data?.status === 200) {
                setState({
                    ...state,
                    transactionsRender: response.data.payload.data,
                    transactionAll: response.data.payload.data,
                    totalPage: response.data.payload.meta.totalPage,
                    totalItem: response.data.payload.meta.totalItem,
                    page: response.data.payload.meta.page
                })
            }
        })
    }, [])
    const onChangePage = (page: number) => {
        let dataSend: GetTranSactionDto = {
            page: page,
            pageSize: 5,
            filter: [`user_id=${props.user_id}`]
        }
        if (state.filterMonth !== 0 && state.filterYear !== 0) {
            dataSend.dateFrom = new Date(state.filterYear, state.filterMonth - 1, 1, 0, 0, 0, 0).toISOString()
            dataSend.dateTo = new Date(state.filterYear, state.filterMonth, 0, 23, 59, 59, 303).toISOString()
        }
        ApiService.getTransactions(dataSend).then((response) => {
            if (response.data?.status === 200) {
                setState({
                    ...state,
                    transactionsRender: response.data.payload.data,
                    transactionAll: response.data.payload.data,
                    totalPage: response.data.payload.meta.totalPage,
                    totalItem: response.data.payload.meta.totalItem,
                    page: response.data.payload.meta.page
                })
                return
            }
            setState({
                ...state,
                page: state.page
            })
        })
    }
    return (
        <>
            <FilterWalletHistory
                onChangeMonth={(month: number) => {
                    setState({
                        ...state,
                        filterMonth: month,
                    })


                    if (month === 0) {
                        let dataSend: GetTranSactionDto = {
                            page: 1,
                            pageSize: 5,
                            filter: [`user_id=${props.user_id}`]
                        }
                        ApiService.getTransactions(dataSend).then((response) => {
                            if (response.data?.status === 200) {
                                setState({
                                    ...state,
                                    transactionsRender: response.data.payload.data,
                                    transactionAll: response.data.payload.data,
                                    totalPage: response.data.payload.meta.totalPage,
                                    totalItem: response.data.payload.meta.totalItem,
                                    page: response.data.payload.meta.page
                                })
                                return
                            }
                            setState({
                                ...state,
                                page: state.page
                            })
                        })
                        return
                    }
                    if (state.filterYear !== 0) {

                        let dataSend: GetTranSactionDto = {
                            page: 1,
                            pageSize: 5,
                            filter: [`user_id=${props.user_id}`],
                            dateFrom: new Date(state.filterYear, month - 1, 1, 0, 0, 0, 0).toISOString(),
                            dateTo: new Date(state.filterYear, month, 0, 23, 59, 59, 303).toISOString()
                        }


                        ApiService.getTransactions(dataSend).then((response) => {
                            if (response.data?.status === 200) {
                                setState({
                                    ...state,
                                    transactionsRender: response.data.payload.data,
                                    transactionAll: response.data.payload.data,
                                    totalPage: response.data.payload.meta.totalPage,
                                    totalItem: response.data.payload.meta.totalItem,
                                    page: response.data.payload.meta.page
                                })
                                return
                            }
                            setState({
                                ...state,
                                page: state.page
                            })
                        })
                    }
                    return

                }}
                onChangeYear={(year) => {
                    if (state.filterMonth !== 0) {
                        let dataSend: GetTranSactionDto = {
                            page: 1,
                            pageSize: 5,
                            filter: [`user_id=${props.user_id}`],
                            dateFrom: new Date(year, state.filterMonth - 1, 1, 0, 0, 0, 0).toISOString(),
                            dateTo: new Date(year, state.filterMonth, 0, 23, 59, 59, 303).toISOString()
                        }
                        ApiService.getTransactions(dataSend).then((response) => {
                            if (response.data?.status === 200) {
                                setState({
                                    ...state,
                                    transactionsRender: response.data.payload.data,
                                    transactionAll: response.data.payload.data,
                                    totalPage: response.data.payload.meta.totalPage,
                                    totalItem: response.data.payload.meta.totalItem,
                                    page: response.data.payload.meta.page
                                })
                                return
                            }
                            setState({
                                ...state,
                                page: state.page
                            })
                        })
                    }

                }}
            />

            <Pagination className="pagination justify-content-center" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                page={state.page}
                onChange={(event, page) => onChangePage(page)}
                count={state.totalPage}
            />

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
                <tbody >
                    {
                        state.transactionsRender.map((x, y) =>
                            <tr key={y}>
                                <td>{`${new Date(x.createdAt).getDate()}/${new Date(x.createdAt).getMonth() + 1}/${new Date(x.createdAt).getFullYear()}`}</td>
                                <td>{x.user_id}</td>
                                <td>{x?.order?.quantity ?? ""}</td>
                                <td className={x.type === TransactionType.Cashout ? "d-min" : "d-plus"}>{x.type === TransactionType.Cashout ? `-${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(x.money)}` : `+${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(x.money)}`}</td>
                                <td>{x.status === TransactionStatus.Pending ? "Đang thực hiện" : "Thành công"}</td>
                                <td>{x.note}</td>
                            </tr>
                        )
                    }

                </tbody>

            </table>
        </>

    )
}
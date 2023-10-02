
import { ProductItem, User } from "@/components/commons/product"
import { SideBar } from "@/components/products/sidebar"
import Config from "@/config"
import CustomerLayout from "@/layouts/customer_layouts"
import { ApiService } from "@/services/api/http"
import { Product } from "@/services/api/inteface/product.inteface"
import { Pagination } from "@mui/material"
import { useEffect, useState } from "react"

interface State {
    product: Array<Product>
    page: number
    pageSize: number,
    totalItem: number,
    totalPage: number,
    filter: Array<string>
}
const ProductsPage = () => {
    const [state, setState] = useState<State>({
        product: [],
        page: 0,
        pageSize: 20,
        totalItem: 0,
        totalPage: 0,
        filter: ['status=SUCCESS']
    })
    useEffect(() => {
        onChangePage(1)
    }, [])
    const onChangePage = (page: number) => {
        ApiService.getProduct({ page: page, pageSize: state.pageSize, filter: state.filter }).then((response) => {
            if (response?.status === 200) {
                setState({
                    ...state,
                    product: response.data.payload.data,
                    page: response.data.payload.meta.page,
                    pageSize: response.data.payload.meta.pageSize,
                    totalItem: response.data.payload.meta.totalItem,
                    totalPage: response.data.payload.meta.totalPage
                })
            }
        })

    }
    const onfilter = (filter: Array<string>) => {
        if (filter.length === 0) {
            onChangePage(1)
            return
        }
        const search = filter.map((x) => `categories=${x}`)
        ApiService.getProduct({ page: 1, pageSize: state.pageSize, filter: [...state.filter], search: search }).then((response) => {
            if (response?.status === 200) {
                setState({
                    ...state,
                    product: response.data.payload.data,
                    page: response.data.payload.meta.page,
                    pageSize: response.data.payload.meta.pageSize,
                    totalItem: response.data.payload.meta.totalItem,
                    totalPage: response.data.payload.meta.totalPage,
                })
            }
        })
    }
    return (
        <CustomerLayout>
            <section aria-label="section">
                <div className="container">
                    <div className="row wow fadeIn">

                        <div className="col-md-9 ">
                            <div className="row">
                                {state.product.map((x, y) =>
                                    <div key={y} className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >

                                        <ProductItem
                                            height={280}
                                            is_none_name={false}
                                            type={User.Customer}
                                            imgAfter={`${Config.apiDomain}${x.products_item[0].photo_befor.path}`}
                                            imgBefor={`${Config.apiDomain}${x.products_item[0].photo_after.path}`}
                                            product_id={x.id}
                                            name={x.name}
                                            price={x.price}
                                        />
                                    </div>
                                )}
                            </div>
                            <Pagination className="pagination justify-content-center" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                                page={state.page}
                                onChange={(event, page) => onChangePage(page)}
                                count={state.totalPage}
                            />
                        </div>
                        <SideBar
                            onChange={(filter: Array<string>) => {
                                onfilter(filter)

                            }}
                        />
                    </div>
                </div>
            </section>
        </CustomerLayout>
    )
}

export default ProductsPage
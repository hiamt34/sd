
import CustomerLayout from "@/layouts/customer_layouts"
import { Product } from "@/services/api/inteface/product.inteface"
import { useEffect, useState } from "react"
import { ApiService } from "@/services/api/http"
import Config from "@/config"
import { ProductItem, User } from "../commons/product"

interface Props {
    type_carousel: string
    name: string
}
interface State {
    product: Array<Product>
}
export const SectionProduct = (props: Props) => {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [state, setState] = useState<State>({
        product: []
    })

    useEffect(() => {

        ApiService.getProduct({
            page: 1,
            pageSize: 20,
            filter: ['status=SUCCESS'],
        }).then((response) => {
            if (response.status === 200) {
                setState({
                    ...state,
                    product: response.data.payload.data
                })

            }
        })

    }, [])

    return (
        <section id="section-items" className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2 style={{ fontWeight: 1 }}>{props.name}</h2>
                            <div className="small-border bg-color-2" />
                        </div>
                    </div>
                    <div id={props.type_carousel} className="owl-carousel wow fadeIn">
                        {
                            array.map((x, y) => <ProductItem height={300} key={y} product_id={state.product[y]?.id} is_none_name={true} name={""} price={state.product.find((z, k) => k === y)?.price ?? 250000} imgBefor={`${Config.apiDomain}/${state.product.find((z, k) => k === y)?.products_item[0].photo_befor.path}`} imgAfter={`${Config.apiDomain}/${state.product.find((z, k) => k === y)?.products_item[0].photo_after.path}`} type={User.Customer} />)
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
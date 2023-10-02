
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
    show: boolean
}
export const SectionProduct = (props: Props) => {
    const [state, setState] = useState<State>({
        product: [],
        show: false
    })

    useEffect(() => {

        ApiService.getProduct({
            page: 1,
            pageSize: 30,
            filter: ['status=SUCCESS'],
        }).then((response) => {
            if (response.status === 200) {
                setState({
                    ...state,
                    product: response.data.payload.data,
                    show: true
                })

                setTimeout(() => {
                    const jquery = jQuery(`#${props.type_carousel}`) as any
                    jquery.owlCarousel({
                        center: false,
                        items: 5,
                        rewind: true,
                        margin: 25,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        nav: true,

                        navText: [
                            "<div class='fa fa-chevron-left'></div>",
                            "<div class='fa fa-chevron-right'></div>",
                        ],
                        dots: false,
                        responsive: {
                            1000: {
                                items: 5,
                            },
                            600: {
                                items: 2,
                            },
                            0: {
                                items: 1,
                            },
                        },
                    });
                }, 100)
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
                    {
                        state.show &&
                        <div id={props.type_carousel} className="owl-carousel wow fadeIn" style={{ visibility: 'visible' }}>
                            {
                                state.product.map((x, y) => <ProductItem height={280} key={y} product_id={state.product[y]?.id} is_none_name={true} name={""} price={state.product.find((z, k) => k === y)?.price ?? 250000} imgBefor={`${Config.apiDomain}/${state.product.find((z, k) => k === y)?.products_item[0].photo_befor.path}`} imgAfter={`${Config.apiDomain}/${state.product.find((z, k) => k === y)?.products_item[0].photo_after.path}`} type={User.Customer} />)
                            }

                        </div>
                    }

                </div>
            </div>
        </section>
    )
}
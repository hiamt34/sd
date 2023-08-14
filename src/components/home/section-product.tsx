import { Product, User } from "../commons/product"
import { Designer } from "../commons/designer"
import { ProductDetail } from "../commons/product_detail"

interface ISectionItem {
    props?: {
        type: string
        type_carousel: string

    }
}
export const SectionProduct: React.FC<ISectionItem> = ({ props }) => {
    return (
        <section id="section-items" className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2> Mẫu thiết kế {props?.type}</h2>
                            <div className="small-border bg-color-2" />
                        </div>
                    </div>
                    <div id={props?.type_carousel} className="owl-carousel wow fadeIn">
                        {
                            // eslint-disable-next-line react/jsx-key
                            [1, 2, 3, 4, 5, 6,].map((x) => { return (<Product name={`Unisex look is the best ${x}`} price={180.000} showProfileAvatar={false} img={`images/mau_ao/ao_don/aodon-${x}.jpg`} type={User.Customer} />) })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
import { ItemCustomer } from "../commons/item-customer"
import { ItemDesign } from "../commons/item-design"

interface ISectionItem {
    props?: {
        type: string
        type_carousel: string

    }
}
export const SectionItems: React.FC<ISectionItem> = ({ props }) => {
    return (
        <section id="section-items" className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2>Thiết kế {props?.type}</h2>
                            <div className="small-border bg-color-2" />
                        </div>
                    </div>
                    <div id={props?.type_carousel} className="owl-carousel wow fadeIn">
                        {
                            // eslint-disable-next-line react/jsx-key
                            [1, 2, 3, 4, 5, 6,].map(() => { return (<ItemCustomer />) })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
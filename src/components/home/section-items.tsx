import { ItemItems } from "../commons/item-items"
interface ISectionItem {
    props?: {
        type?: string
    }
}
export const SectionItems: React.FC<ISectionItem> = ({ props }) => {
    return (
        <section id="section-items" className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2>Sản phẩm mới</h2>
                            <div className="small-border bg-color-2" />
                        </div>
                    </div>
                    <div id="items-carousel" className="owl-carousel wow fadeIn">
                        {
                            // eslint-disable-next-line react/jsx-key
                            [1, 2, 3, 4, 5, 6,].map(() => { return (<ItemItems />) })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
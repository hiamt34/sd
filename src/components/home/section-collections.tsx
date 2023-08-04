import { ItemItems } from "../commons/item-items"

export const SectionCollections = () => {
    return (<section id="section-collections" className="no-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2>Sản phẩm bán hot</h2>
                        <div className="small-border bg-color-2" />
                    </div>
                </div>
                <div id="collection-carousel" className="owl-carousel wow fadeIn">
                    {
                        // eslint-disable-next-line react/jsx-key
                        [1, 2, 3, 4, 5, 6,].map(() => { return (<ItemItems />) })
                    }
                </div>
            </div>
        </div>
    </section>)
}
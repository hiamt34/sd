import { Product } from "../commons/product"
import { Designer } from "../commons/designer"


export const SectionCollections = () => {
    return (<section id="section-collections" className="no-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2>Designer</h2>
                        <div className="small-border bg-color-2" />
                    </div>
                </div>
                <div id="collection-carousel" className="owl-carousel wow fadeIn">
                    {
                        // eslint-disable-next-line react/jsx-key
                        [1, 2, 3, 4, 5, 6].map((x) => { return (<Designer img_carosel={`images/carousel/crs-${x}.jpg`} avatar={`images/author/author-${x}.jpg`} />) })
                    }
                </div>
            </div>
        </div>
    </section>)
}
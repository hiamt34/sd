import { ItemItems } from "@/components/commons/item-items"
import { SideBar } from "@/components/products/sidebar"
import ClientLayout from "@/layouts"

const ProductsPage = () => {
    return (
        <ClientLayout>
            <section aria-label="section">
                <div className="container">
                    <div className="row wow fadeIn">
                        <SideBar />
                        <div className="col-md-9">
                            <div className="row">
                                {/* nft item begin */}
                                <div className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <ItemItems />
                                </div>

                                <div className="col-md-12 text-center">
                                    <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">
                                        Load more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ClientLayout>
    )
}

export default ProductsPage
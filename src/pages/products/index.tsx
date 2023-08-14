
import { Product, User } from "@/components/commons/product"
import { SideBar } from "@/components/products/sidebar"
import ClientLayout from "@/layouts"
import { useState } from "react"

const ProductsPage = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6])
    return (
        <ClientLayout>
            <section aria-label="section">
                <div className="container">
                    <div className="row wow fadeIn">

                        <div className="col-md-9">
                            <div className="row">
                                {/* nft item begin */}
                                {arr.map((x) =>
                                    <div className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <Product
                                            showProfileAvatar={false}
                                            type={User.Designer}
                                            img='images/mau_ao/ao_don/aodon-1.jpg'
                                            name="Unisex RedFlag"
                                            price={180.000}
                                        />
                                    </div>
                                )}
                                <div className="col-md-12 text-center">
                                    <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">
                                        Load more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <SideBar />
                    </div>
                </div>
            </section>
        </ClientLayout>
    )
}

export default ProductsPage
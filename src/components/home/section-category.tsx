import { listCategories } from "@/constants/category"
import { ApiService } from "@/services/api/http"
import Link from "next/link"
import { useEffect } from "react"

export const SectionCategory = () => {
    useEffect(() => {
        ApiService
    }, [])
    return (<section id="section-category" className="no-top no-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2 style={{ fontWeight: 1 }}>Danh mục</h2>
                        <div className="small-border bg-color-2" />
                    </div>
                </div>
                {
                    listCategories.map((value, key) => {
                        return (
                            <div key={key}
                                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                                data-wow-delay=".1s"
                            >
                                <Link
                                    href={{ pathname: 'products', query: { type: value.type } }}
                                    className="icon-box style-2 rounded"
                                >
                                    {/* <i className="fa fa-image" /> */}
                                    <span>{value.name}</span>
                                </Link>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    </section>)
}
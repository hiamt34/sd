import { listCategories } from "@/constants/category"
import { ApiService } from "@/services/api/http"
import { Category } from "@/services/api/inteface/category.interface"
import Link from "next/link"
import { useEffect, useState } from "react"

interface State {
    categories: Array<Category>
}
export const SectionCategory = () => {
    const [state, setState] = useState<State>({
        categories: []
    })
    useEffect(() => {
        ApiService.getCategory().then((response) => {
            setState({
                categories: response.data?.payload
            })
        })
    }, [])
    return (<section id="section-category" className="no-top no-bottom">
        <div className="container">
            <div className="row d-flex " style={{ justifyContent: 'center' }}>
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2 style={{ fontWeight: 1 }}>Danh mục</h2>
                        <div className="small-border bg-color-2" />
                    </div>
                </div>
                {
                    state.categories.map((value, key) => {
                        return (
                            <div key={key}
                                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                                data-wow-delay=".1s"
                            >
                                <Link
                                    href={{ pathname: 'products', query: { type: value.id } }}
                                    className="icon-box style-2 rounded"
                                >
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
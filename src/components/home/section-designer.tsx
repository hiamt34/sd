import { Designer } from "@/services/api/inteface/designer.interface"
import { DesignerItem } from "../commons/designer"
import { useEffect, useState } from "react"
import { ApiService } from "@/services/api/http"
import Config from "@/config"
interface State {
    show: boolean
    desinger: Array<Designer>
}

export const SectionDesigner = () => {
    const [state, setState] = useState<State>({
        show: false,
        desinger: []
    })
    useEffect(() => {
        ApiService.getListDesigner({ page: 1, pageSize: 20 }).then((response) => {
            setState({
                show: true,
                desinger: response.data.payload.data
            })
            setTimeout(() => {
                const jquery = jQuery(`#collection-carousel-design`) as any
                jquery.owlCarousel({
                    center: false,
                    items: 5,
                    rewind: true,
                    margin: 25,
                    autoplay: true,
                    autoplayTimeout: 3700,
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
            }, 1000)
        })

    }, [])
    return (<section id="section-collections" className="no-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h2 style={{ fontWeight: 1 }}>Designer</h2>
                        <div className="small-border bg-color-2" />
                    </div>
                </div>
                {state.show &&
                    <div id="collection-carousel-design" className="owl-carousel wow fadeIn">
                        {

                            state.desinger.map((x) => { return (<DesignerItem designer={x} />) })
                        }
                    </div>
                }

            </div>
        </div>
    </section>)
}
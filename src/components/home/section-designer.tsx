import { Designer } from "@/services/api/inteface/designer.interface"
import { DesignerItem } from "../commons/designer"
import { useEffect, useState } from "react"
import { ApiService } from "@/services/api/http"
interface State {
    desinger: Array<Designer>
}

export const SectionDesigner = () => {
    useEffect(() => {
        ApiService.getDesigner()
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
                <div id="collection-carousel" className="owl-carousel wow fadeIn">
                    {
                        // eslint-disable-next-line react/jsx-key
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => { return (<DesignerItem img_carosel={`images/carousel/crs-${x}.jpg`} avatar={`images/author/author-${x}.jpg`} />) })
                    }
                </div>
            </div>
        </div>
    </section>)
}
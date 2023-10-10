import { RootState } from "@/store/store"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { ApiService } from "@/services/api/http"
import { Category } from "@/services/api/inteface/category.interface"
interface Prop {
    onChange: (name: Array<string>) => void
}
interface State {
    category: Array<Category>
    filter: Array<string>
}
export const SideBar = (props: Prop) => {
    const [state, setState] = useState<State>({
        category: [],
        filter: [],
    })
    let tick: number

    let refArray: Array<{ id: number, ref: any }> = []
    useEffect(() => {
        ApiService.getCategory().then((response) => {
            if (tick) {
                setState({
                    ...state,
                    category: response?.data?.payload,
                    filter: [response.data?.payload.find((x) => x?.id === tick)?.name as string]
                })
                return
            }
            setState({
                ...state,
                category: response?.data?.payload
            })

        })


        if (window) {
            tick = parseInt(window.location.href.split('=')[1])
        }




    }, [])
    console.log('filter after ', state.filter);

    return (
        <aside className="col-md-3">
            <div className="item_filter_group">
                <h4>Chủ đề</h4>
                <div className="de_form">
                    {
                        state.category.map((x, y) =>
                            <div className="de_checkbox" key={y}>
                                <input
                                    ref={refArray.find((z) => z.id === x.id)?.ref as any}
                                    id={`check_cat_${y}`}
                                    type="checkbox"
                                    defaultValue={`check_cat_${y}`}
                                    checked={state.filter.includes(x.name) ? true : false}
                                    onChange={(event) => {
                                        if (state.filter.includes(x.name)) {
                                            setState({
                                                ...state,
                                                filter: state.filter.filter((z) => z !== x.name)
                                            })
                                            props.onChange(state.filter.filter((z) => z !== x.name))
                                            return
                                        }
                                        setState({
                                            ...state,
                                            filter: [...state.filter, x.name]
                                        })
                                        props.onChange([...state.filter, x.name])
                                    }}
                                />
                                <label htmlFor={`check_cat_${y}`}>{x.name}</label>
                            </div>
                        )
                    }

                </div>
            </div>



        </aside>
    )
}
import { RootState } from "@/store/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

interface Prop {
    onTick: () => void
    onCancle: () => void
}
interface State {
    category: Array<string>
}
export const SideBar = (props: Prop) => {
    const appState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    const [state, setState] = useState<State>({
        category: appState.categories
    })
    return (
        <aside className="col-md-3">
            <div className="item_filter_group">
                <h4>Chủ đề</h4>
                <div className="de_form">
                    {
                        state.category.map((x, y) =>
                            <div className="de_checkbox" key={y}>
                                <input
                                    id={`check_cat_${y}`}
                                    type="checkbox"
                                    defaultValue={`check_cat_${y}`}
                                />
                                <label htmlFor={`check_cat_${y}`}>{x}</label>
                            </div>
                        )
                    }

                </div>
            </div>



        </aside>
    )
}
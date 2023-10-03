import { ButtonBase } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
export interface Props {
      onSelectCategory: (category: string) => void
      onSelectTime: (sort: string) => void
}
export const FilterProduct = (props: Props) => {
      const designerState = useSelector((state: RootState) => state.designer)
      const dispatch = useDispatch()
      return (
            <div style={{ display: 'flex' }}>
                  <div className="items_filter ">
                        <div id="item_category" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>Chủ đề</a>
                              <ul>
                                    <li onClick={() => props.onSelectCategory('Tất cả')} ><span>Tất cả</span></li>
                                    {
                                          designerState.categories.map((x, y) =>
                                                <li onClick={() => props.onSelectCategory(x)} key={y}><span>{x}</span></li>
                                          )
                                    }


                              </ul>
                        </div>

                  </div>
                  <div className="items_filter ">
                        <div id="buy_category" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>Ngày tạo</a>
                              <ul>
                                    <li onClick={() => props.onSelectTime('DESC')}><span>Mới nhất</span></li>
                                    <li onClick={() => props.onSelectTime('ASC')} ><span>Cũ nhất</span></li>

                              </ul>
                        </div>

                  </div>


            </div>
      )
}
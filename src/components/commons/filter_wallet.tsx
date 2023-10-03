import { ButtonBase } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
interface Props {
      onChangeYear: (data: number) => void
      onChangeMonth: (data: number) => void
}
export const FilterWalletHistory = (prop: Props) => {
      let years = []
      const thisYear = new Date().getFullYear()
      for (let index = 0; index < (thisYear - 2022); index++) {
            years.push(2023 + index)

      }
      return (
            <div style={{ display: 'flex' }}>
                  <div className="items_filter ">
                        <div id="item_category1" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>Tháng</a>
                              <ul>
                                    <li onClick={() => prop.onChangeMonth(0)}><span>Tất cả</span></li>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x, y) =>
                                          <li onClick={() => prop.onChangeMonth(x)} key={y}><span>Tháng {x}</span></li>
                                    )}
                              </ul>
                        </div>

                  </div>
                  <div className="items_filter ">
                        <div id="buy_category1" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>{(new Date()).getFullYear()}</a>
                              <ul>
                                    {

                                          years.map((x, y) =>
                                                <li onClick={() => prop.onChangeYear(x)} key={y}><span>{x}</span></li>
                                          )
                                    }


                              </ul>
                        </div>

                  </div>


            </div>
      )
}
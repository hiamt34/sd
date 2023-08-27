import { ButtonBase } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
export const FilterWalletHistory = () => {
      return (
            <div style={{ display: 'flex' }}>
                  <div className="items_filter ">
                        <div id="item_category1" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>Tháng</a>
                              <ul>
                                    <li className="active"><span>Tháng</span></li>
                                    <li><span>Tháng 1</span></li>
                                    <li><span>Tháng 2</span></li>
                                    <li><span>Tháng 3</span></li>
                                    <li><span>Tháng 4</span></li>
                                    <li><span>Tháng 5</span></li>
                              </ul>
                        </div>

                  </div>
                  <div className="items_filter ">
                        <div id="buy_category1" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>Năm</a>
                              <ul>
                                    <li className="active"><span>Năm</span></li>
                                    <li><span>2022</span></li>
                                    <li><span>2023</span></li>

                              </ul>
                        </div>

                  </div>


            </div>
      )
}
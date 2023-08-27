import { ButtonBase } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
export const FilterProduct = () => {
      return (
            <div style={{ display: 'flex' }}>
                  <div className="items_filter ">
                        <div id="item_category" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>Chủ đề</a>
                              <ul>
                                    <li className="active"><span>Chủ đề</span></li>
                                    <li><span>Áo đôi</span></li>
                                    <li><span>Free style</span></li>
                                    <li><span>Anime</span></li>
                                    <li><span>Áo lớp</span></li>
                                    <li><span>Hoddies</span></li>
                              </ul>
                        </div>

                  </div>
                  <div className="items_filter ">
                        <div id="buy_category" className="dropdown row wow" style={{ marginLeft: 0 }}>
                              <a href="#" className="btn-selector" style={{ borderRadius: 10 }}>Ngày tạo</a>
                              <ul>
                                    <li className="active"><span>Ngày taọ</span></li>
                                    <li><span>Mới nhất</span></li>
                                    <li><span>Cũ nhất</span></li>

                              </ul>
                        </div>

                  </div>


            </div>
      )
}
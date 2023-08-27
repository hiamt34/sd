export const FilterBank = () => {
      return (
            <div className="items_filter text-center">
                  <div id="filter_by_duration" className="dropdown">
                        <a href="#" className="btn-selector">
                              Chọn ngân hàng
                        </a>
                        <ul>
                              <li>
                                    <span>MB bank</span>
                              </li>
                              <li className="active">
                                    <span>Tp Bank</span>
                              </li>
                              <li>
                                    <span>VietComBank</span>
                              </li>
                              <li>
                                    <span>TechComBank</span>
                              </li>
                        </ul>
                  </div>
            </div>
      )
}
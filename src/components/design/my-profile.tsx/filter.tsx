export const FilterMyProfile = () => {
    return (
        <div className="items_filter text-center">
            <div id="filter_by_duration" className="dropdown">
                <a href="#" className="btn-selector">
                    Tháng
                </a>
                <ul>
                    <li>
                        <span>Last 24 hours</span>
                    </li>
                    <li className="active">
                        <span>Last 7 days</span>
                    </li>
                    <li>
                        <span>Last 30 days</span>
                    </li>
                    <li>
                        <span>All time</span>
                    </li>
                </ul>
            </div>
            <div id="filter_by_category" className="dropdown">
                <a href="#" className="btn-selector">
                    Năm
                </a>
                <ul>
                    <li className="active">
                        <span>All categories</span>
                    </li>
                    <li>
                        <span>Art</span>
                    </li>
                    <li>
                        <span>Music</span>
                    </li>
                    <li>
                        <span>Domain Names</span>
                    </li>
                    <li>
                        <span>Virtual World</span>
                    </li>
                    <li>
                        <span>Trading Cards</span>
                    </li>
                    <li>
                        <span>Collectibles</span>
                    </li>
                    <li>
                        <span>Sports</span>
                    </li>
                    <li>
                        <span>Utility</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
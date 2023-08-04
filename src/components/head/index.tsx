import { navLink } from "@/constants/link.constants"
import Link from "next/link"

const Header = () => {


    return (
        <header className="transparent header-light scroll-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    {/* logo begin */}
                                    <div id="logo">
                                        <Link href={{ pathname: navLink.home.path }}>
                                            <img alt="" src="images/logo-retro.png" />
                                        </Link>
                                    </div>
                                    {/* logo close */}
                                </div>
                                <div className="de-flex-col">
                                    <input
                                        id="quick_search"
                                        className="xs-hide"
                                        name="quick_search"
                                        placeholder="search item here..."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                {/* mainmenu begin */}
                                <ul id="mainmenu">
                                    <li>
                                        <a href="04_retro-index.html">
                                            Home
                                            <span />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="04_retro-index.html">Homepage 1</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-index-2.html">Homepage 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="04_retro-explore.html">
                                            Explore
                                            <span />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="04_retro-explore.html">Explore</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-explore-2.html">Explore 2</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-explore-music-nft.html">New: Music NFT</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-collection.html">Collections</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-live-auction.html">Live Auction</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-item-details.html">Item Details</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-help-center.html">Help Center</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="04_retro-author.html">
                                            Author
                                            <span />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="04_retro-author.html">Author</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-profile.html">Profile</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-wallet.html">Wallet</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-create-options.html">Create</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-login.html">Login</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Stats
                                            <span />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="04_retro-activity.html">Activity</a>
                                            </li>
                                            <li>
                                                <a href="04_retro-rankings.html">Rankings</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* mainmenu close */}
                                <div className="menu_side_area">
                                    <Link href={{ pathname: navLink.login.path }} className="btn-main btn-wallet" passHref>
                                        <i className="icon_wallet_alt" />
                                        <span>{navLink.login.text}</span>
                                    </Link>
                                    <span id="menu-btn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
export default Header
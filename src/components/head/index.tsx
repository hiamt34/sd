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
                                        <a href="/">
                                            Trang chủ
                                            <span />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/products">
                                            Sản phẩm
                                            <span />
                                        </a>

                                    </li>
                                    <li>
                                        <a href="design/my-profile">
                                            Designer
                                            <span />
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#">
                                            Giỏ hàng
                                            <span />
                                        </a>
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
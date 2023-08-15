import { navLink } from "@/constants/link.constants"
import { ButtonBase } from "@mui/material"
import Link from "next/link"

const Header = () => {


    return (
        <header className="transparent header-light scroll-light">
            <div className="container">
                <div className="row" >
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    {/* logo begin */}
                                    <div id="logo">
                                        <Link href={{ pathname: navLink.home.path }}>
                                            <img
                                                height={55}
                                                width='100%'
                                                alt="" src="images/SDlogo.png" />
                                        </Link>
                                    </div>
                                    {/* logo close */}
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
                                        <a href="products/design">
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
                                    <Link href={{ pathname: navLink.login.path }} className=" btn-wallet" passHref>
                                        {/* <i className="icon_wallet_alt" /> */}
                                        {/* <span>{navLink.login.text}</span> */}
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
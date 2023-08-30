import { navLink } from "@/constants/link.constants"
import { ButtonBase } from "@mui/material"
import Link from "next/link"
interface Props {
    is_designer: boolean
    is_login: boolean
}
const Header = (prop: Props) => {


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
                                        <Link href={prop.is_designer ? "/design" : "/"}>
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
                                <ul id="mainmenu">
                                    {
                                        !prop.is_designer &&
                                        <>
                                            <li>
                                                <a href="/" onBlur={() => console.log('hover')}>
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
                                                <a href="customer" className="">
                                                    Giỏ hàng
                                                    <span />
                                                </a>
                                            </li>
                                        </>

                                    }
                                    {
                                        prop.is_designer && prop.is_login &&
                                        <>

                                            <li>
                                                <Link href='/design/notification'>

                                                    Thông báo
                                                    <span />
                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="/design" className="">
                                                    Đăng xuất
                                                    <span />
                                                </Link>
                                            </li>
                                        </>

                                    }

                                    <li>
                                        <Link href="/" className="">
                                            Điều khoản
                                            <span />
                                        </Link>
                                    </li>

                                </ul>
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
import { useSelector } from "react-redux"
import { select_info } from "../../app/slice/info.slide"
import { Link } from "react-router-dom"

function Footer() {
    const { about, payment, ship, follow, service_custom } = useSelector(select_info)

    return (
        <footer className="mt-[10px] space-y-3 text-black text-opacity-65">
            <div className="shadow-xl md:shadow-md h-[1rem]"></div>
            <div className="w-[80%] mx-auto flex">
                <div className="w-1/5">
                    <div className="mt-6 mb-3 text-sm font-medium">CHĂM SÓC KHÁCH HÀNG</div>
                    <ul className="text-xs space-y-2">
                        {service_custom &&
                            service_custom.map((v, i) => {
                                return (
                                    <li key={i} className="hover:text-red-600">
                                        <Link to={"/"}>{v}</Link>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div className="w-1/5">
                    <div className="mt-6 mb-3 text-sm font-medium">VỀ SHOPAA</div>
                    <ul className="text-xs space-y-2">
                        {about &&
                            about.map((v, i) => {
                                return (
                                    <li key={i} className="hover:text-red-600">
                                        <Link to={"/"}>{v}</Link>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div className="w-1/5">
                    <div className="mt-6 mb-3 text-sm font-medium">THANH TOÁN</div>
                    <ul className="text-xs flex flex-wrap">
                        {payment &&
                            payment.map((v, i) => {
                                return (
                                    <li key={i} className="shadow-md w-14 h-7 mr-2 mb-2 rounded-md flex justify-center items-center">
                                        <img src={v} alt="" />
                                    </li>
                                )
                            })}
                    </ul>
                    <div className="mt-6 mb-3 text-sm font-medium">ĐƠN VỊ VẬN CHUYỂN</div>
                    <ul className="text-xs flex flex-wrap">
                        {ship &&
                            ship.map((v, i) => {
                                return (
                                    <li key={i} className="shadow-md w-14 h-7 mr-2 mb-2 rounded-md flex justify-center items-center">
                                        <img className="" src={v} alt="" />
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div className="w-1/5">
                    <div className="mt-6 mb-3 text-sm font-medium">THEO DÕI CHÚNG TÔI TRÊN</div>
                    <ul className="text-xs space-y-2">
                        {follow &&
                            follow.map((v, i) => {
                                return (
                                    <li key={i} className="rounded-md ">
                                        <a className="flex space-x-2 hover:text-red-600" href={v.link} target="_blank" rel="noopener noreferrer">
                                            <img src={v.thumb} alt="" />
                                            <span>{v.name}</span>
                                        </a>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div className="w-1/5">
                    <div className="mt-6 mb-3 text-sm font-medium">TẢI ỨNG DỤNG SHOPAA</div>
                    <div className="flex">
                        <a href={follow && follow[0]?.link} target="_blank" rel="noopener noreferrer">
                            <img
                                className="rounded-md shadow-md p-1 mr-3"
                                src="https://res.cloudinary.com/anhdaden/image/upload/v1703697357/info/a5e589e8e118e937dc660f224b9a1472_qjwgx6.png"
                                alt=""
                            />
                        </a>
                        <div className="flex flex-col space-y-2">
                            <a className="" href={follow && follow[0]?.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="rounded-md shadow-md p-1"
                                    src="https://res.cloudinary.com/anhdaden/image/upload/v1703696176/info/ad01628e90ddf248076685f73497c163_vip8qa.png"
                                    alt=""
                                />
                            </a>
                            <a className="" href={follow && follow[0]?.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="rounded-md shadow-md p-1"
                                    src="https://res.cloudinary.com/anhdaden/image/upload/v1703697302/info/ae7dced05f7243d0f3171f786e123def_mrn7y1.png"
                                    alt=""
                                />
                            </a>
                            <a className="" href={follow && follow[0]?.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="rounded-md shadow-md p-1"
                                    src="https://res.cloudinary.com/anhdaden/image/upload/v1703699259/info/35352374f39bdd03b25e7b83542b2cb0_fkgf17.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-4 w-full">
                <div className="w-[80%] mx-auto flex justify-between">
                    <div>© 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
                    <div>Quốc gia & Khu vực: Singapore Indonesia Thái Lan Malaysia Việt Nam Philippines Brazil México Colombia Chile Đài Loan</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer

import { AiOutlineMenu } from "react-icons/ai"
import { BsCart3 } from "react-icons/bs"
import { FaTruckFast } from "react-icons/fa6"
import { BiUserCircle } from "react-icons/bi"

import { Link } from "react-router-dom"
import ItemNav from "../component/ItemNav"
import { Dropdown } from "antd"
import Search from "../component/Search"
import { useEffect } from "react"
import { get } from "../../utils/httpRequest"
import { useSelector } from "react-redux"
import { select_info } from "../../app/slice/info.slide"

const profileItems = [
    {
        label: "Dang nhap",
        key: "0",
        onClick: () => console.log("ccc"),
    },
    {
        label: "Dang ky",
        key: "1",
        onClick: () => console.log("ccc"),
    },
    {
        type: "divider",
    },
    {
        label: "3rd menu item",
        key: "3",
    },
]

function Header() {
    const { logo } = useSelector(select_info)
    useEffect(() => {
        const fecthApi = async () => {
            const a = await get("/product/products")
            // console.log(a.metadata[0])
        }
        fecthApi()
    })

    return (
        <div className="bg-orange-600 sticky top-0 w-[100%] z-50 mb-4">
            <div className="w-[80%] mx-auto flex justify-between text-white py-2">
                <div className="flex justify-center items-center space-x-3">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <ItemNav icon={<AiOutlineMenu />} text={"Danh muc"}></ItemNav>
                </div>

                <div className="w-[40rem]">
                    <Search />
                </div>

                <div className="flex justify-center items-center space-x-3">
                    <ItemNav icon={<BsCart3 />} text={"gio hang"}></ItemNav>
                    <ItemNav icon={<FaTruckFast />} text={"don hang"}></ItemNav>
                    <div>
                        <Dropdown menu={{ items: profileItems }} trigger={["click"]}>
                            <div>
                                <ItemNav key={0} icon={<BiUserCircle />} text={"dang nhap"}></ItemNav>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header

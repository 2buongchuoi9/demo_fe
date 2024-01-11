import { Dropdown } from "antd"
import { FaAngleRight } from "react-icons/fa"
import { useSelector } from "react-redux"
import { select_category } from "../../../app/slice/category.slice"

const MegaMenu = ({ items, childer }) => {
    return (
        <Dropdown menu={{ items }} placement="right">
            <div>{childer}</div>
        </Dropdown>
    )
}

function MainMenu() {
    const { category: cate } = useSelector(select_category)
    return (
        <>
            <div className="text-xs min-h-full font-medium rounded-xl shadow-xl drop-shadow-xl bg-white overflow-hidden">
                <ul className="flex min-h-full flex-col justify-between">
                    {cate &&
                        cate.map((v) => {
                            const childer = v.childer
                            const items = childer.map((a) => {
                                return {
                                    ...a,
                                    key: a._id,
                                    label: (
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                            {a.cate_title}
                                        </a>
                                    ),
                                }
                            })

                            return (
                                <MegaMenu
                                    items={items}
                                    childer={
                                        <li
                                            key={v._id}
                                            className="group flex cursor-pointer hover:bg-opacity-10 hover:bg-black justify-between items-center"
                                        >
                                            <div className="flex py-[0.6px] h-full items-center">
                                                <img className="mx-0.5 h-8" src={v.cate_thumb} alt="" />
                                                <span className="group-hover:text-red-500">{v.cate_title.toUpperCase()}</span>
                                            </div>
                                            <span className="group-hover:text-red-600">
                                                <FaAngleRight />
                                            </span>
                                        </li>
                                    }
                                ></MegaMenu>
                            )
                        })}
                </ul>
            </div>
        </>
    )
}
export default MainMenu

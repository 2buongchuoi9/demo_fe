import { useSelector } from "react-redux"
import BannerHome from "./BannerHome"
import MainMenu from "./MainMenu"
import { select_info } from "../../../app/slice/info.slide"

const ii = (n) => Math.floor(Math.random() * n)

function TopHome() {
    const { banner } = useSelector(select_info)

    const bn = [...(banner || [])].sort(() => Math.random() - 0.5).filter((v, i) => i < 3)

    console.log("bn", bn)

    return (
        <div className="mx-auto w-[100%] flex space-x-3">
            <div className="w-[20%] min-h-full">
                <MainMenu />
            </div>
            <div className="banner w-[80%] min-h-full">
                <BannerHome />
            </div>
            <div className="right banner w-[26%] flex flex-col justify-between">
                {bn &&
                    bn.map((v) => (
                        <div className="rounded-xl shadow-xl overflow-hidden">
                            <img src={v.thumb} className="min-h-[85px]" alt="" />
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default TopHome

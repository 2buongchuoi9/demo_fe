import classNames from "classnames"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"
import { select_info } from "../../../app/slice/info.slide"
import { chunkArray } from "../../../utils"

const cl = classNames.bind()

function BannerHome() {
    const { banner } = useSelector(select_info)
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current === banner?.length - 1 ? 0 : current + 1)
    }
    const prev = () => {
        setCurrent(current === 0 ? banner.length - 1 : current - 1)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            next()
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <>
            <div className="rounded-xl min-h-full shadow-xl drop-shadow-xl overflow-hidden flex flex-col justify-between">
                <div className="relative group min-h-full">
                    <div className="flex min-h-full transition ease-in-out duration-300" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {banner && banner.map((v) => <img src={v.thumb} alt={v.title} />)}
                    </div>
                    <div className="absolute bottom-3 right-[50%] flex space-x-1.5 translate-x-[50%]">
                        {banner &&
                            banner.map((v, i) => (
                                <div
                                    className={cl("bg-white border-2 opacity-50 rounded-3xl w-[10px] h-[10px]", {
                                        " bg-[#ee4d2d] opacity-1": current === i,
                                    })}
                                ></div>
                            ))}
                    </div>
                    <div
                        className="absolute top-[50%] left-[-100px] h-[60px] w-[30px] rounded-e-[1000px] translate-y-[-50%] bg-black opacity-25 transition-all duration-500 ease-in-out group-hover:left-0 text-white flex items-center justify-center pr-1"
                        onClick={prev}
                    >
                        <MdOutlineArrowBackIos color="white" size={28} />
                    </div>
                    <div
                        className="absolute top-[50%] right-[-100px] h-[60px] w-[30px] rounded-s-[1000px] translate-y-[-50%] bg-black opacity-25 transition-all duration-500 ease-in-out group-hover:right-0 text-white flex items-center justify-center pl-1"
                        onClick={next}
                    >
                        <MdOutlineArrowForwardIos color="white" size={28} />
                    </div>
                </div>

                <div className="flex w-full min-h-full ">
                    {banner &&
                        banner.map((v, i) => {
                            return (
                                <>
                                    <div
                                        className={cl(
                                            "min-w-[20%] min-h-full flex justify-center items-center text-sm py-4 px-1 hover:bg-[#f3f4f6] transition ease-in-out duration-400",
                                            {
                                                " relative font-medium shadow-md": current === i,
                                            }
                                        )}
                                        style={{ transform: `translateX(-${Math.floor(current / 5) * 500}%)` }}
                                        onClick={() => setCurrent(i)}
                                    >
                                        <div className="text-center min-h-full flex justify-center items-center">{v.title}</div>
                                        {current === i && <div className="w-full h-[2px] absolute bottom-0 left-0 bg-red-500"></div>}
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
export default BannerHome

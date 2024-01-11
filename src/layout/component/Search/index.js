import Tippy from "@tippyjs/react/headless"
import { useEffect, useRef, useState } from "react"
import useDebounce from "../../../hooks/useDebounce"

function Search() {
    const [valueSearch, setValueSearch] = useState("")
    const [resultSearch, setResultSearch] = useState([])
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const vl = useDebounce(valueSearch, 500)

    // useEffect(() => {
    //     if (!vl.trim()) {
    //         setResultSearch([])
    //         return
    //     }

    //     const fecthAPI = async () => {
    //         setLoading(true)
    //         const a = await searchProduct(vl)
    //         setResultSearch(a.data.list)
    //         setLoading(false)
    //     }
    //     fecthAPI()
    // }, [vl])

    const handleChange = (e) => {
        const ttt = e.target.value
        !ttt.startsWith(" ") && setValueSearch(ttt)
    }

    const handleClear = () => {
        setValueSearch("")
        setResultSearch([])
        inputRef.current.focus()
    }
    return (
        <div>
            <Tippy
                interactive
                visible={true}
                placement="bottom"
                render={() => <div className="bg-slate-400 w-[40rem] rounded-lg" tabIndex="-1"></div>}
                onClickOutside={() => {}}
            >
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        ref={inputRef}
                        type="search"
                        spellCheck="false"
                        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:outline-none focus-within:outline-none"
                        placeholder="Bạn cần tìm gì?"
                        required
                    ></input>
                    <button
                        type="submit"
                        class="text-white absolute end-1.5 bottom-1 bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-4 py-1"
                    >
                        Search
                    </button>
                </div>
            </Tippy>
        </div>
    )
}
export default Search

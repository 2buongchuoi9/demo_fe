import { useDispatch } from "react-redux"
import Footer from "../Footer"
import Header from "../Header"
import { useEffect } from "react"
import { fetchInfo } from "../../app/slice/info.slide"
import { fetchCategory } from "../../app/slice/category.slice"

function DefaultLayout({ childer }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchApi = async () => {
            await dispatch(fetchInfo())
            await dispatch(fetchCategory())
        }
        fetchApi()
    }, [dispatch])

    return (
        <>
            <Header></Header>
            <main className="main w-[80%] mx-auto ">{childer}</main>
            <Footer></Footer>
        </>
    )
}
export default DefaultLayout

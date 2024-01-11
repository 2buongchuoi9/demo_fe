import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { publicRoutes } from "./routes/index"
import DefaultLayout from "./layout/DefaultLayout"

function App() {
    return (
        <>
            <Router>
                <div className="app">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component
                            return <Route key={index} path={route.path} element={<DefaultLayout childer={<Page />} />} />
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App

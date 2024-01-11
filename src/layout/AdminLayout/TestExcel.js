import axios from "axios"
import { useState } from "react"

function TestExcel() {
    const [file, setFile] = useState(null)
    const formData = new FormData()
    formData.append("file", file)
    const handleClick = async () => {
        try {
            const response = await axios.post("http://localhost:8084/student/upload-excel", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                responseType: "blob",
            })

            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "result.xlsx") // Tên tệp khi tải xuống
            document.body.appendChild(link)
            link.click()

            const data = await response.data
            console.log(data)
        } catch (error) {
            console.error("Error uploading file:", error.response.data)
            console.error("Error uploading file:", error.response.message)
            console.error("Error uploading file:", error.response.status)
        }
    }
    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleClick}>send</button>
        </div>
    )
}
export default TestExcel

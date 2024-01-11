const key = 987987

const messageAntd = {
    loading: (content) => ({ key: key, type: "loading", content }),
    info: (content) => ({ key: key, type: "info", content }),
    success: (content) => ({ key: key, type: "success", content }),
    error: (content) => ({ key: key, type: "error", content }),
}

const chunkArray = (array, size) => {
    if (!array) return
    return array.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / size)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // Khởi tạo mảng con nếu không tồn tại
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
}

export { messageAntd, chunkArray }

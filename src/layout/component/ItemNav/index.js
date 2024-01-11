function ItemNav({ icon, text }) {
    return (
        <div className="bg-white bg-opacity-15 rounded-lg flex items-center p-2 space-x-1 hover:cursor-pointer hover:bg-opacity-20 align-middle">
            <div className="mx-auto w-4">{icon}</div>
            <div className="">{text}</div>
        </div>
    )
}
export default ItemNav

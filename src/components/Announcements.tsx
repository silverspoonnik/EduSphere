
const Announcements = ()=>{

    return (
        <div className="bg-white p-4 rounded-md">
           <div className="flex items-center justify-between">
            <h1 className="font-semibold text-xl ">Announcements</h1>
            <span className="text-xs text-gray-400">View all</span>
           </div>
           <div className="flex flex-col gap-4 mt-4">
            <div className=" bg-Skyblue rounded-md p-4">
                <div className="justify-between items-center flex ">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
                    <span className="text-xs text-gray-400  bg-white rounded-md p-1">14/3/2025</span>
                </div>
                <p className="text-gray-400 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, error.</p>

            </div>
            <div className=" bg-PurpleLight rounded-md p-4">
                <div className="justify-between items-center flex ">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
                    <span className="text-xs text-gray-400  bg-white rounded-md p-1">14/3/2025</span>
                </div>
                <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempora?</p>

            </div>

            <div className=" bg-YellowLight rounded-md p-4">
                <div className="justify-between items-center flex ">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
                    <span className="text-xs text-gray-400  bg-white rounded-md p-1">14/3/2025</span>
                </div>
                <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempora?</p>

            </div>
           </div>
        </div>
    )

}

export default Announcements
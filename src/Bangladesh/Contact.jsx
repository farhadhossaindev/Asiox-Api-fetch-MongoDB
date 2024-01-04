import BdHome from "./BdHome"

function Contact() {
    return (
        <div>
            <BdHome />
            {/* Singin Start */}

            <div className="flex justify-center ">
            <div className="">
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs my-3 mx-4" /><br />
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs my-3 mx-4" /><br/>
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs my-3 mx-4" /><br/>
                <input type="Submit" className=" btn bg-pink-400 text-black hover:bg-white hover:text-black  w-full max-w-xs my-3 mx-4" /><br/>
            </div>
            </div>


        </div>
    )
}

export default Contact
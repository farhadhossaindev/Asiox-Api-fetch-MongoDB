import UkHome from "./UkHome"

function UkContact() {
    return (

        <div><UkHome />



            <div className="flex justify-center ">
                <div className="">
                    <input type="text" placeholder="You Name" className="input input-bordered input-success w-full max-w-xs my-3 mx-4" /><br />
                    <input type="tel" placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs my-3 mx-4" /><br />
                    <input type="email" placeholder="Email" className="input input-bordered input-success w-full max-w-xs my-3 mx-4" /><br />
                    <input type="Submit" className=" btn bg-green-800 text-black hover:bg-white hover:text-black  w-full max-w-xs my-3 mx-4" /><br />
                </div>
            </div>





        </div>
    )
}

export default UkContact
import React from 'react'
import UsaHome from './UsaHome'

function UsaContact() {
    return (
        <div>
            <UsaHome />
            <div className="flex justify-center ">
                <div className="">
                    <input type="text" placeholder="You Name" className="input input-bordered input-bg-secondary w-full max-w-xs my-3 mx-4" /><br />
                    <input type="tel" placeholder="Phone Number" className="input input-bordered input-bg-secondary w-full max-w-xs my-3 mx-4" /><br />
                    <input type="email" placeholder="Email" className="input input-bordered input-bg-secondary w-full max-w-xs my-3 mx-4" /><br />
                    <input type="Submit" className=" btn btn-primary text-black hover:bg-white hover:text-black  w-full max-w-xs my-3 mx-4" /><br />
                </div>
            </div>
        </div>
    )
}

export default UsaContact
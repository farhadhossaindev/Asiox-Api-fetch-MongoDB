import { Link } from "react-router-dom"

function UsaHome() {
    return (
        <div>
            {/* Navbar Start */}
            <div className="navbar bg-slate-500 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52">
                            <li className="hover:bg-slate-800 rounded-xl hover:text-white"><a>Shop</a></li>
                            <li>
                                <a className="hover:bg-slate-800 rounded-xl hover:text-white">USA</a>
                                <ul className="p-2">
                                    <li className="hover:bg-green-800 rounded-xl"><Link to={"/bd"}>BD</Link></li>
                                    <li className="hover:bg-green-800 rounded-xl"><Link to={"/"}>CA</Link></li>
                                    <li className="hover:bg-green-800 rounded-xl"><Link to={"/uk"}>UK</Link></li>
                                </ul>
                            </li>
                            <li className="hover:bg-slate-800 rounded-xl hover:text-white"><Link to={"/usa/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Farhad</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Shop</a></li>
                        <li>
                            <details>
                                <summary>USA</summary>
                                <ul className="p-2 bg-white text-black">
                                    <li className="hover:bg-green-800 rounded-xl"><Link to={"/bd"}>BD</Link></li>
                                    <li className="hover:bg-green-800 rounded-xl"><Link to={"/"}>CA</Link></li>
                                    <li className="hover:bg-green-800 rounded-xl"><Link to={"/uk"}>UK</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to={"/usa/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white">United States of America</a>
                </div>
            </div>
            {/* Navbar End */}








        </div>
    )
}

export default UsaHome
import { Link } from "react-router-dom"

function CaHome() {
  return (
    <div>
      {/* Navnar start */}
      <div className="navbar bg-yellow-400 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              <li className="hover:bg-yellow-300 rounded-xl" ><a>Shop</a></li>
              <li>
                <a className="hover:bg-yellow-300 rounded-xl">CA</a>
                <ul className="p-2">
                  <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/bd"}>BD</Link></li>
                  <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/bd"}>UK</Link></li>
                  <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/bd"}>USA</Link></li>
                </ul>
              </li>
              <li className="hover:bg-yellow-300 rounded-xl"><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Farhad</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/shop"}>Shop</Link></li>
            <li>
              <details>
                <summary className="hover:bg-yellow-300 rounded-xl">CA</summary>
                <ul className="p-2 bg-white z-10">
                  <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/bd"}>BD</Link></li>
                  <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/bd"}>UK</Link></li>
                  <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/bd"}>USA</Link></li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-yellow-300 rounded-xl"><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white">Canada</a>
        </div>
      </div>
      {/* Navbar End */}








    </div>
  )
}

export default CaHome
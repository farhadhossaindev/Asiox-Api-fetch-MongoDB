import { Link } from "react-router-dom"

function UkHome() {
  return (
    <div>
      {/* Navbar Start */}
      <div className="navbar bg-green-700 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="hover:bg-green-800 rounded-xl"><a>Shop</a></li>
              <li>
                <a className="hover:bg-green-800 rounded-xl">UK</a>
                <ul className="p-2">
                  <li className="hover:bg-green-800 rounded-xl"><Link to={"/bd"}>BD</Link></li>
                  <li className="hover:bg-green-800 rounded-xl"><Link to={"/"}>CA</Link></li>
                  <li className="hover:bg-green-800 rounded-xl"><Link to={"/usa"}>USA</Link></li>
                </ul>
              </li>
              <li className="hover:bg-green-800 rounded-xl"><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Farhad</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Shop</a></li>
            <li>
              <details>
                <summary>UK</summary>
                <ul className="p-2">
                  <li className="hover:bg-green-800 rounded-xl"><Link to={"/bd"}>BD</Link></li>
                  <li className="hover:bg-green-800 rounded-xl"><Link to={"/"}>CA</Link></li>
                  <li className="hover:bg-green-800 rounded-xl"><Link to={"/usa"}>USA</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to={"/uk/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white">United Kingdom</a>
        </div>
      </div>
      {/* Navbar End */}






    </div>
  )
}

export default UkHome
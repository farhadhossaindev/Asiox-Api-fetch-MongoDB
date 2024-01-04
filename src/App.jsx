import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CaHome from "./Canada/CaHome";
import BdHome from "./Bangladesh/BdHome";
import UsaHome from "./UnitedStates/UsaHome";
import UkHome from "./UnitedKingdom/UkHome";
import Contact from "./Bangladesh/Contact";
import CaContact from "./Canada/CaContact";
import UkContact from "./UnitedKingdom/UkContact";
import UsaContact from "./UnitedStates/UsaContact";
import CaShop from "./Canada/CaShop";
import BdShop from "./Bangladesh/BdShop";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CaHome />} />
          <Route path="/bd" element={<BdHome />} />
          <Route path="/usa" element={<UsaHome />} />
          <Route path="/uk" element={<UkHome />} />
          <Route path="/bd/contact" element={<Contact />} />
          <Route path="/contact" element={<CaContact />} />
          <Route path="/uk/contact" element={<UkContact />} />
          <Route path="/usa/contact" element={<UsaContact />} />
          <Route path="/shop" element={<CaShop />} />
          <Route path="/bd/shop" element={<BdShop />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

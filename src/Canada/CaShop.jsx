import { useEffect, useState } from "react"
import CaHome from "./CaHome"
import CaCard from "./CaCard";
import axios from "axios";


function CaShop() {
    const [doctors, setDoctors] = useState([])
    const getdoctor = async () => {
        const allDoctor = axios.get('http://localhost:3000/doctors')
        .then((data) => setDoctors(data.data))
    };

    useEffect(() => {
        getdoctor();
    }, [doctors]);

    console.log(doctors)





    return (
        <div>
            <CaHome />

            <div className="flex col-6 flex-wrap justify-center gap-5 mt-10">
                {
                    doctors.map((doctor) => (<CaCard key={doctor._id} doc={doctor}  />))
                }
            </div>

        </div>
    )
}

export default CaShop
import axios from "axios"
import { useEffect } from "react";



function CaCard({ doc }) {
    const doctorId = (docId) => {
        axios.delete(`//localhost:3000/doctors/${docId}`)
            .then((res => console.log("Deleted")))
    };

    useEffect(() => { }, [doctorId])





    return (
        <div>
            <div className="card card-side bg-white shadow-xl text-black">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRFOs07tAX-mBYB8IaFWGB039ZmpKNZLLSvl_9hbcfZD8onVi3oo4ruAICbtIJyDd-10&usqp=CAU" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{doc.doctorName}</h2>
                    <p> Catagory :-  {doc.category}</p>
                    <p> Rating :-  {doc.rating}</p>
                    <p> Visite :-  {doc.doctoerVisite}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => doctorId(doc._id)} className="btn btn-primary">Delete</button>
                        <button onClick={() => doctorId(doc._id)} className="btn btn-primary">UpDate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaCard
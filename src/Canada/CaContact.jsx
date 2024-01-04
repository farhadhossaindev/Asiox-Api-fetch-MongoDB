import { useForm } from "react-hook-form";
import React from 'react'
import CaHome from './CaHome'
import axios from "axios";

function CaContact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formData = (data) => {

        axios.post('http://localhost:3000/addDoctor', data)
        .then ((res )=> console.log('Data Added'));

        reset();
    };




    return (
        <div>
            <CaHome />



            <div className="flex justify-center ">
                <form onSubmit={handleSubmit(formData)}>

                    <input {...register("doctorName", { required: true, })} type="text" placeholder="Doctor Name" className="input input-bordered input-warning w-full max-w-xs my-3 mx-4" /><br />
                    {errors.doctorName && <span>This field is required</span>}

                    <input {...register("category")} type="text" placeholder="Category" className="input input-bordered input-warning w-full max-w-xs my-3 mx-4" /><br />

                    <input {...register("doctoerVisite")} type="number" placeholder="Visite" className="input input-bordered input-warning w-full max-w-xs my-3 mx-4" /><br />

                    <input {...register("rating")} type="number" placeholder="Rating" className="input input-bordered input-warning w-full max-w-xs my-3 mx-4" /><br />

                    <input type="Submit" className=" btn bg-yellow-400 text-black hover:bg-white hover:text-black  w-full max-w-xs my-3 mx-4" />
                </form>
            </div>





        </div>
    )
}

export default CaContact
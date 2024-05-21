import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const AllcourseForAdmin = () => {

    const [courses, setCourses] = useState([])


    const getAllCorses = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/course/get-courses')

            if (data?.success) {
                setCourses(data?.courses)
                toast.success(data?.message)
                console.log(data?.courses)

            }
        }
        catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getAllCorses()
    }, [])
const handleDelete=async(did)=>{
    try {
    let answer=window.prompt("Are You want to delete this Course ?")
        if(!answer) return;
        const { data } = await axios.delete(`http://localhost:5000/course/delete-course/${did}`)

        if (data?.success) {
           
            console.log(data?.message)
            getAllCorses()

        }
    }
    catch (error) {
        console.log(error)

    }


}
    return (
        <div className="w-full capitalize text-black">


            <div className="overflow-x-auto ">
                <table className="table text-black font-semibold">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold capitalize">

                            <th>Photo</th>
                            <th>Tittle</th>
                            <th>author</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  start*/}
                        {courses && courses?.map(c => <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={`http://localhost:5000/course/course-photo/${c?._id}`} alt="course's Photo" />
                                        </div>
                                    </div>



                                </div>
                            </td>
                            <td>   {c?.tittle}</td>
                            <td>
                                {c?.author?.name}

                            </td>
                            <td> {c?.description.slice(0, 30)}...</td>

                            <th>
                                <button className="btn btn-error btn-md" 
                               onClick={()=>handleDelete(c?._id)}>Delete </button>
                            </th>
                            <th>
                                <button className="btn btn-accent btn-md">Update</button>
                            </th>
                        </tr>
                        )}


                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default AllcourseForAdmin
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


const AllReviews = () => {

    const [reviews,setReviews] = useState([])


    const getAllReviews = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/reviews/get-reviews')

            if (data?.success) {
                setReviews(data?.reviews)
                console.log(data.reviews)
             
            }
        }
        catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getAllReviews()
    }, []);
    //delete items:-
const handleDelete=async(did)=>{
    try {
    let answer=window.prompt("Are You want to delete this Course ?")
        if(!answer) return;
        const { data } = await axios.delete(`http://localhost:5000/reviews/delete-reviews/${did}`)

        if (data?.success) {
           toast.success(data?.message)
           getAllReviews()
          
           
       

        }
    }
    catch (error) {
        console.log(error)

    }


}
    return (
        <div className="w-full capitalize text-black">


            <div className="overflow-x-auto ">
                <h1> Total :{reviews?.length}</h1>
                <table className="table text-black font-semibold">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold capitalize">

                            <th>Photo</th>
                            <th>User</th>
                            <th>Category</th>
                            <th>Reviews</th>
                            <th>Rating</th>
                           
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  start*/}
                        {reviews && reviews?.map(c => <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={`http://localhost:5000/user/user-photo/${c?.author?._id}`}
                                             alt="posts's Photo" />
                                        </div>
                                    </div>



                                </div>
                            </td>
                            <td>   {c?.author?.name}</td>
                           
                            <td>{c?.category}</td>
                            <td>{c?.review.slice(0,20)}...</td>
                            <td>{c?.rating}</td>

                            <th>
                                <button className="btn btn-error btn-md"
                                onClick={()=>handleDelete(c?._id)}
                                >Delete</button>
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
export default AllReviews
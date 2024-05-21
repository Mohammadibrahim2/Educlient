import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


const AllPosts = () => {

    const [posts,setPosts] = useState([])


    const getAllPosts = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/posts/get-posts')

            if (data?.success) {
                setPosts(data?.posts)
                console.log(data.posts)
             
            }
        }
        catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getAllPosts()
    }, [])
const handleDelete=async(did)=>{
    try {
    let answer=window.prompt("Are You want to delete this Course ?")
        if(!answer) return;
        const { data } = await axios.delete(`http://localhost:5000/user/delete-user/${did}`)

        if (data?.success) {
           toast.success(data?.message)
           getAllPosts()
          
           
       

        }
    }
    catch (error) {
        console.log(error)

    }


}
    return (
        <div className="w-full capitalize text-black">


            <div className="overflow-x-auto ">
                <h1> Total :{posts?.length}</h1>
                <table className="table text-black font-semibold">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold capitalize">

                            <th>Photo</th>
                            <th>Author</th>
                            <th>Tittle</th>
                            <th>Description</th>
                           
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  start*/}
                        {posts && posts?.map(c => <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={`http://localhost:5000/posts/posts-photo/${c?._id}`}
                                             alt="posts's Photo" />
                                        </div>
                                    </div>



                                </div>
                            </td>
                            <td>   {c?.author?.name}</td>
                           
                            <td>{c?.tittle}</td>
                            <td>{c?.description.slice(0,20)}...</td>

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
export default AllPosts
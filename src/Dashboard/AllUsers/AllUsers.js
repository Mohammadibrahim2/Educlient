import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


const AllUsers = () => {

    const [users, setUsers] = useState([])


    const getAllUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/user/get-user')

            if (data?.success) {
                setUsers(data?.user)
             
            }
        }
        catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])
const handleDelete=async(did)=>{
    try {
    let answer=window.prompt("Are You want to delete this Course ?")
        if(!answer) return;
        const { data } = await axios.delete(`http://localhost:5000/user/delete-user/${did}`)

        if (data?.success) {
           toast.success(data?.message)
           getAllUsers()
          
           
       

        }
    }
    catch (error) {
        console.log(error)

    }


}
    return (
        <div className="w-full capitalize text-black">


            <div className="overflow-x-auto ">
                <h1> Total :{users?.length}</h1>
                <table className="table text-black font-semibold">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold capitalize">

                            <th>Photo</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  start*/}
                        {users && users?.map(c => <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={`http://localhost:5000/user/user-photo/${c?._id}`}
                                             alt="users's Photo" />
                                        </div>
                                    </div>



                                </div>
                            </td>
                            <td>   {c?.name}</td>
                            <td>
                                {c?.email}

                            </td>
                            <td>{c?.phone}</td>
                            <td>{c?.isAdmin}</td>

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
export default AllUsers
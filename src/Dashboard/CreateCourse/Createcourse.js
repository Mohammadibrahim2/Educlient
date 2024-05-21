import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { Select } from "antd";
import { Option } from "antd/es/mentions";


const CreateCourse = () => {
    const [auth, setAuth] = useAuth()
    const [name, setName] = useState('')
    const [tittle, setTittle] = useState('')
    const [photo, setPhoto] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const navigate = useNavigate()

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/category")
            if (data?.success) {
                setCategories(data?.categories)
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getAllCategories()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const author = auth?.user?._id


           try{
        const courseData = new FormData()
        courseData.append("name", name)
        courseData.append("tittle", tittle)
        courseData.append("author", author)
        courseData.append("photo", photo)
        courseData.append("category", category)
        courseData.append("description", description)

        console.log({ name, tittle, photo, author, description, category })

        console.log({courseData})
              const {data}=await axios.post('http://localhost:5000/course/create-course',courseData)

                if(data?.success){
                    navigate("/dashboard")
                    toast.success(data?.message)

                }
                else{
                    toast.error(data?.message)
                }

           }
           catch(error){
            console.log(error)

           }



    }
    return (
        <div className="mt-12  mb-5 lg:w-[80%] w-full shadow-lg">
            <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>

                <h1 className="text-indigo-950 font-semibold text-4xl pb-4">Create Course</h1>


                <div className="form-control">

                    <label className="label">
                        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Course Name </span>
                    </label>
                    <input type="name" name="name"
                        placeholder="Full Name"
                        className=" py-2 px-3 bg-white border "
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-control  text-black overflow-hidden ">
                    <label className="label">
                        <span className="btn btn-outline-primary w-full  text-black "
                            style={{ fontSize: "14px" }}>{photo ? photo.name : "Upload Photo"}</span>
                        <input type="file"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setPhoto(e.target.files[0])} className="w-full py-2 px-3  border hidden  " />
                    </label>


                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Tittle </span>
                    </label>
                    <input type="tittle" name="tittle"
                        required placeholder="Write Tittle"
                        className=" py-2 px-3 bg-white border  "
                        onChange={(e) => setTittle(e.target.value)} />

                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Description</span>
                    </label>
                    <input type="description" name="description"
                        required placeholder="Write  description"
                        onChange={(e) => setDescription(e.target.value)}
                        className=" py-2 px-3 bg-white border  " />

                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Author </span>
                    </label>
                    <input type="auther" name="author"

                        defaultValue={auth?.user?.name}
                        readOnly

                        className=" py-2 px-3 bg-white border  " />

                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Category</span>
                    </label>
                    <Select type="categories" name="categories"
                        showSearch
                        onChange={(value) => setCategory(value)}
                        bordered={false}
                        placeholder="Select a Category"
                        className=" py-2 px-3 bg-white border  ">
                        {
                            categories?.map((c) => (
                                <Option key={c?._id}
                                 value={c?._id} >
                                 {c?.name}
                                </Option>
                            ))
                        }


                    </Select>

                </div>



                <div className="form-control mt-6">
                    <button type="submit" className=" 
                            text-white bg-indigo-950 w-full rounded-md py-2 
                            font-semibold hover:bg-yellow-500 hover:text-indigo-950">
                        Create</button>
                </div>


            </form>

        </div>
    )
}

export default CreateCourse

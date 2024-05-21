import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import ReactStars from "react-stars";


const CreateReviews = () => {
    const [auth, setAuth] = useAuth()
    const [review, setREviews] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState('')
    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault();
        const author = auth?.user?._id
        try {

            console.log({ author, review, category,rating })


              const {data}=await axios.post('http://localhost:5000/reviews/create-reviews',
              { author, review, category,rating })

                if(data?.success){
                    navigate("/dashboard")
                    toast.success(data?.message)

                }
                else{
                    toast.error(data?.message)
                }

        }
        catch (error) {
            console.log(error)

        }



    }
    const categories = [
        {
            i: 1,
            text: "Accelent",
        },
        {
            i: 2,
            text: "Good",
        },
        {
            i: 3,
            text: "Not Bad",
        },
        {
            i: 4,
            text: "Bad",
        }
    ]
    return (
        <div className="mt-12  mb-5 lg:w-[80%] w-full shadow-lg">
            <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>

                <h1 className="text-indigo-950 font-semibold text-4xl pb-4">Write About Our Service </h1>



                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Your reviews</span>
                    </label>
                    <TextArea rows={6} cols={20} type="description" name="description"
                        required placeholder="Write  description"
                        onChange={(e) => setREviews(e.target.value)}
                        className=" py-2 px-3 bg-white border  " />

                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Rateing.</span>
                    </label>
                    <ReactStars count={5}
                     onChange={(value) => setRating(value)}
                        half={true}
                        size={32}

                        color2={'#ffd700'}
                    />
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
                        placeholder="Select an opinion"
                        className="  px-3 bg-white border  ">
                        {
                            categories?.map((c) => (
                                <Option key={c?.i}
                                    value={c?.text} >
                                    {c?.text}
                                </Option>
                            ))
                        }


                    </Select>

                </div>



                <div className="form-control mt-6">
                    <button type="submit" className=" 
                            text-white bg-indigo-950 w-full rounded-md py-2 
                            font-semibold hover:bg-yellow-500 hover:text-indigo-950">
                        Send</button>
                </div>


            </form>

        </div>
    )
}

export default CreateReviews

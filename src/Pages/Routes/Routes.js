import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../Home/Home/Home/Home";
import Registration from "../Registration/Registration";
import Contact from "../Contact/Contact";
import Login from "../Registration/Login/Login";
import Profile from "../UserProfile/UserProfile";
import ErrorPage from "../404/404";
import Dashboard from "../../Dashboard/Dashboard";
import DashboardLayout from "../../Dashboard/DashboardLayout";
import CreateCategory from "../../Dashboard/CreateCategory/CreateCategory";
import CreateCourse from "../../Dashboard/CreateCourse/Createcourse";
import SingleCourse from "../Home/Home/SingleCourse/Singlecourse";
import AllCourse from "../Home/Home/Course/Allcourse";
import CreateReviews from "../../Dashboard/CreateReviews/CreateReviews";
import CreatePosts from "../../Dashboard/CreatePosts/CreatePosts";
import AllcourseForAdmin from "../../Dashboard/AllCourses/AllCoursesForAdm";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import AllPosts from "../../Dashboard/AllPosts/AllPosts";
import AllReviews from "../../Dashboard/AllReviews/AllReviews";
import PrivateRoute from "./PrivateRoute";





export const router=createBrowserRouter([


    {
        path:"/",
        element:<Main></Main>,
        children:[

            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Registration/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/profile",
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path:"*",
                element:<ErrorPage/>
            },{
                path:"/singleCourse/:id",
                element:<SingleCourse/>
            },
            {
                path:"/allcourse",
                element:<AllCourse/>
            }
        ]


    },
    //Dashboard:--
    {
        path:"/dashboard",
        element:<DashboardLayout/>,
       children:[
            {
                path:"/dashboard",
                element:<Dashboard/>

            },
            {
                path:"/dashboard/createcategory",
                element:<CreateCategory/>

            },
            {
                path:"/dashboard/createcourse",
                element:<CreateCourse/>

            },
            {
                path:"/dashboard/createreviews",
                element:<CreateReviews/>

            },
            {
                path:"/dashboard/createposts",
                element:<CreatePosts/>

            },
            {
                path:"/dashboard/allcourses",
                element:<AllcourseForAdmin/>

            },
            {
                path:"/dashboard/allusers",
                element:<AllUsers/>

            },
            {
                path:"/dashboard/allposts",
                element:<AllPosts/>

            },
            {
                path:"/dashboard/allreviews",
                element:<AllReviews/>

            },

        ]
    }

   
])
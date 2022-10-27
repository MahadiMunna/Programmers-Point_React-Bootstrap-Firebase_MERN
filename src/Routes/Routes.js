import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Enrollment from "../Pages/Enrollment/Enrollment";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Premium from "../Pages/Premium/Premium";
import Register from "../Pages/Register/Register";
import Tutorials from "../Pages/Shared/Tutorials/Tutorials";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://programmers-point-server.vercel.app/tutorials')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://programmers-point-server.vercel.app/courses')
            },
            {
                path: '/tutorials/:id',
                element: <Tutorials></Tutorials>,
                loader: ({ params }) => fetch(`https://programmers-point-server.vercel.app/tutorials/${params.id}`)
            },
            {
                path: '/tutorial/:id',
                element: <PrivateRoute><Enrollment></Enrollment></PrivateRoute>,
            },
            {
                path: '/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
            },
            {
                path: '/Fa',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: <h2 className="text-center">404 page not found</h2>
    }
])
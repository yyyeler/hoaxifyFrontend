import { createBrowserRouter } from "react-router-dom"
import { SignUp } from '@/pages/SignUp/index.jsx'
import { Home } from '@/pages/Home/index.jsx'
import { Login } from '@/pages/Login/index.jsx'
import { User } from '@/pages/User/index.jsx'
import App from "@/App.jsx";
import { Activation } from "@/pages/Activation/index.jsx";

export default createBrowserRouter([
    {
      path:"/",
      Component: App,
      children:[
            {
                path:"/",
                index:true,
                Component: Home
            },
            {
                path:"/signup",
                Component: SignUp
            },
            {
                path:"/activation/:token",
                Component: Activation
            },
            {
                path:"/user/:id",
                Component: User
            },
            {
                path:"/login",
                Component: Login
            }
      ]
    }
  ]);
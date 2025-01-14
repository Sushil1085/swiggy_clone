import React from "react";
import ReactDOM from "react-dom/client";    
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";

const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />  
                        {/* for childe route routing in the place of outlet body about contact will route */}
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />,
        
            },
            {
                path:"/about",
                element: <About />,
        
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    }
   
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

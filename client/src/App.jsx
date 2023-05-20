import {createBrowserRouter, RouterProvider} from "react-router-dom"

/* import all components */

import Username from "./components/Username"
import Password from "./components/Password"
import Register from "./components/Register"
import Recovery from "./components/Recovery"
import Profile from "./components/Profile"
import Reset from "./components/Reset"
import PageNotFound from "./components/PageNotFound"


/** root routes */
const router = createBrowserRouter([
  {
    path:'/',
    element: <Username/>
  },
  {
    path:'/register',
    element: <Register/>

  },
  {
    path:'/password',
    element: <Password/>
  },
  {
    path:'/profile',
    element: <Profile/>
  },
  {
    path:'/reset',
    element: <Reset/>
  },
  {
    path:'*',
    element: <PageNotFound/>
  },
  {
    path:'/recovery',
    element: <Recovery/>
  }

])
function App() {

  return (
    <main>
       <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App

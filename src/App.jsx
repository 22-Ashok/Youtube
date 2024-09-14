import Header from "./components/Header"
import BodyContainer from "./components/BodyContainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import MainVideo from './components/MainVideo'

const router = createBrowserRouter([{
  path:'/',
  element:<Body />,
  children: [{
    path:'/',
    element:<BodyContainer />
  }, {
    path:'watch',
    element: <MainVideo />
  }]
}])


function App() {
  
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Header from './Header/Header.jsx'
import { RouterProvider } from 'react-router-dom'
import Pagamento from './pagamento.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children:[
      {
        path: "/",
        element: <App/>
      },
      {
        path: "pagamento",
        element: <Pagamento/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

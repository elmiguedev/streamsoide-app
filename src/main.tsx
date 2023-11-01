// @ts-ignore
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, } from "react-router-dom";
import './index.scss'
/** @ts-ignore */
import * as bootstrap from 'bootstrap'
import { router } from './router/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)

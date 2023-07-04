import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.tsx';
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProviders from './providers/AuthProviders.tsx';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </Provider>
  </React.StrictMode>,
)

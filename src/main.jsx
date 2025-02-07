import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Portfolio from './Portfolio.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TechHuntPointDetails from './components/TechHuntPointDetails.jsx';
import LibraryManagementDetails from './components/LibraryManagementDetails.jsx';
import VisaConnectDetails from './components/VisaConnectDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/tech-hunt-point",
    element: <TechHuntPointDetails />,
  },
  {
    path: "/library-management-system",
    element: <LibraryManagementDetails />,
  },
  {
    path: "/visa-connect",
    element: <VisaConnectDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

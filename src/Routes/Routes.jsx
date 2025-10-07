import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayouts from '../Layouts/RootLayouts';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import ErrorPages from '../Pages/ErrorPages';
import InstalledApp from '../Pages/InstalledApp';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/apps",
            Component:Apps,
        },
        {
            path:"/installed",
            Component:InstalledApp,
        }
    ]
  },
  
]);

export default router;
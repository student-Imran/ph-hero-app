import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayouts from '../Layouts/RootLayouts';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/apps",
            Component:Apps,
        },
    ]
  },
]);

export default router;
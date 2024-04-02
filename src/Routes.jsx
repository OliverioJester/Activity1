import React from 'react'
import {createHashRouter} from "react-router-dom";
import Home from './Pages/Home';
import Calculator from './Pages/Calculator';
import Todolist from './Pages/Todolist';
import Cardlist from './Pages/Cardlist';
import NotFound from './Pages/NotFound';
import Colorbutton from './Pages/Colorbutton';

const Routes = createHashRouter([
    
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/calculator",
      element: <Calculator />,
    },

    {
        path: "/todolist",
        element: <Todolist />,
    },

    
    {
      path: "/colorbutton",
      element: <Colorbutton />,
  },

    {
        path: "/cardlist",
        element: <Cardlist />,
    },

    {
      path: '*',
      element: <NotFound />,
    },
    
  ]);

export default Routes
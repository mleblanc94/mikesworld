import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
      index: true,
      element: <Home />
      },
      {
        path: '/predators',
        element: <Predators />
      },
      {
        path: '/sports',
        element: <Sports />
      },
      {
        path: '/politics',
        element: <Politics />,
      },
      {
        path: '/publicfreakouts',
        element: <PublicFreakouts />
      },
      {
        path: '/interesting',
        element: <Interesting />
      },
      {
        path: '/videogames',
        element: <VideoGames />
      },
      {
        path: '/music',
        element: <Music />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
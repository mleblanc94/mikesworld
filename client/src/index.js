import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Interesting from './pages/Interesting';
import Food from './pages/Food';
import Politics from './pages/Politics';
import Predators from './pages/Predators';
import PublicFreakouts from './pages/PublicFreakouts';
import Sports from './pages/Sports';
import VideoGames from './pages/VideoGames';
import Login from './pages/Login';
import Signup from './pages/Signup'


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
        path: '/food',
        element: <Food />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
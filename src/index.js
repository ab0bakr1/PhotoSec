import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/pages/Home"
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import PagePortfolio from './Component/pages/PagePortfolio/PagePortfolio';
import PortfolioBoat from './Component/pages/PagePortfolio/Filters/PortfolioBoat';
import PortfolioCafe from './Component/pages/PagePortfolio/Filters/PortfolioCafe';
import PortfolioCars from './Component/pages/PagePortfolio/Filters/PortfolioCars';
import PortfolioConference from './Component/pages/PagePortfolio/Filters/PortfolioConference';
import PortfolioEvents from './Component/pages/PagePortfolio/Filters/PortfolioEvents';
import PortfolioExhibition from './Component/pages/PagePortfolio/Filters/PortfolioExhibition';
import PortfolioMasjid from './Component/pages/PagePortfolio/Filters/PortfolioMasjid';
import PortfolioPorducts from './Component/pages/PagePortfolio/Filters/PortfolioPorducts';
import PortfolioRestaurant from './Component/pages/PagePortfolio/Filters/PortfolioRestaurant';
import PortfolioSea from './Component/pages/PagePortfolio/Filters/PortfolioSea';
import PortfolioStadium from './Component/pages/PagePortfolio/Filters/PortfolioStadium';
import PortfolioTrip from './Component/pages/PagePortfolio/Filters/PortfolioTrip';





const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Portfolio",
    element: <PagePortfolio />,
  },
  {
    path: "/Portfolio/Cafe",
    element: <PortfolioCafe />,
  },
  {
    path: "/Portfolio/boat",
    element: <PortfolioBoat />,
  },
  {
    path: "/Portfolio/cars",
    element: <PortfolioCars />,
  },
  {
    path: "/Portfolio/conference",
    element: <PortfolioConference />,
  },
  {
    path: "/Portfolio/events",
    element: <PortfolioEvents />,
  },
  {
    path: "/Portfolio/exhibition",
    element: <PortfolioExhibition />,
  },
  {
    path: "/Portfolio/masjid",
    element: <PortfolioMasjid />,
  },
  {
    path: "/Portfolio/products",
    element: <PortfolioPorducts />,
  },
  {
    path: "/Portfolio/restaurant",
    element: <PortfolioRestaurant />,
  },
  {
    path: "/Portfolio/sea",
    element: <PortfolioSea />,
  },
  {
    path: "/Portfolio/stadium",
    element: <PortfolioStadium />,
  },
  {
    path: "/Portfolio/trip",
    element: <PortfolioTrip />,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
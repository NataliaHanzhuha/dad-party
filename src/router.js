import React from 'react';

import { Story } from './components/Story';
import { Wishes } from './components/Wishes';
import { Main } from './components/Main';
import { Events } from './components/Events';
import { ContactUs } from './components/Contact-Us';
import {PartyMenu} from './components/PartyMenu';
import Seats from './components/Seats/Seats';

export const routeNames = {
  Main: '/',
  Biography: '/biography',
  Wishes: '/well-wishes',
  Seats: '/seats',
  Menu: '/party-menu',
  Program: '/events',
  Media: '/contact-us',
};

export const routes = [
  {path: routeNames.Biography, element: <Story/>},
  {path: routeNames.Wishes, element: <Wishes/>},
  {path: routeNames.Seats, element: <Seats/>},
  {path: routeNames.Menu, element: <PartyMenu/>},
  {path: routeNames.Program, element: <Events/>},
  {path: routeNames.Media, element: <ContactUs/>},
  {path: routeNames.Main, element: <Main/>},
];

export const routesForMenu = Object.entries(routeNames)
  .map(([key, value]) => {
    return {path: value, name: key};
  });

import React from 'react';

import { Story } from './components/Story';
import { Wishes } from './components/Wishes';
import { Main } from './components/Main';
import { Events } from './components/Events';
import { ContactUs } from './components/Contact-Us';

const routeNames = {
  Main: '/',
  Biography: '/biography',
  'Well Wishes': '/well-wishes',
  // 'Party Menu': '/party-menu',
  'Event Program': '/events',
  'Event Media': '/contact-us'
};

export const routes = [
  {path: routeNames.Biography, element: <Story/>},
  {path: routeNames['Well Wishes'], element: <Wishes/>},
  // {path: routeNames['Party Menu'], element: <PartyMenu/>},
  {path: routeNames['Event Program'], element: <Events/>},
  {path: routeNames['Event Media'], element: <ContactUs/>},
  {path: routeNames.Main, element: <Main/>},
];

export const routesForMenu = Object.entries(routeNames)
  .map(([key, value]) => {
    return {path: value, name: key};
  });

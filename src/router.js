import React from 'react';

import { Story } from './components/Story';
import { Wishes } from './components/Wishes';
import { PartyMenu } from './components/PartyMenu';
import { Main } from './components/Main';
import { Events } from './components/Events';

const routeNames = {
  Main: '/',
  Biography: '/biography',
  'Well Wishes': '/well-wishes',
  'Party Menu': '/party-menu',
  'Event Program': '/events'
};

export const routes = [
  {path: routeNames.Biography, element: <Story/>},
  {path: routeNames['Well Wishes'], element: <Wishes/>},
  {path: routeNames['Party Menu'], element: <PartyMenu/>},
  {path: routeNames['Event Program'], element: <Events/>},
  {path: routeNames.Main, element: <Main/>},
];

export const routesForMenu = Object.entries(routeNames)
  .map(([key, value]) => {
    return {path: value, name: key};
  });

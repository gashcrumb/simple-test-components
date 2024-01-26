import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { simpleTestComponentsPlugin, SimpleTestComponentsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(simpleTestComponentsPlugin)
  .addPage({
    element: <SimpleTestComponentsPage />,
    title: 'Root Page',
    path: '/simple-test-components'
  })
  .render();

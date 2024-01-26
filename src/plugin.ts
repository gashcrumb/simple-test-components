import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const simpleTestComponentsPlugin = createPlugin({
  id: 'simple-test-components',
  routes: {
    root: rootRouteRef,
  },
});

export const SimpleTestComponentsPage = simpleTestComponentsPlugin.provide(
  createRoutableExtension({
    name: 'SimpleTestComponentsPage',
    component: () =>
      import('./components/TestInfoCard').then(m => m.TestInfoCard),
    mountPoint: rootRouteRef,
  }),
);

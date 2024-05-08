import {
  ApiHolder,
  createPlugin,
  createRoutableExtension,
} from "@backstage/core-plugin-api";
import { Entity } from "@backstage/catalog-model";

import { rootRouteRef } from "./routes";

export const simpleTestComponentsPlugin = createPlugin({
  id: "simple-test-components",
  routes: {
    root: rootRouteRef,
  },
});

export const isAvailableYes = (_entity: Entity) => true;

export const isAvailableNo = (_entity: Entity) => false;

export const isAvailableUsingContext = (
  _entity: Entity,
  _context: { apis: ApiHolder }
) => {
  return true;
};

export const SimpleTestComponentsPage = simpleTestComponentsPlugin.provide(
  createRoutableExtension({
    name: "SimpleTestComponentsPage",
    component: () =>
      import("./components/TestInfoCard").then((m) => m.TestInfoCard),
    mountPoint: rootRouteRef,
  })
);

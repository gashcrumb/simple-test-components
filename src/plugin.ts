import {
  ApiHolder,
  createPlugin,
  createRoutableExtension,
} from "@backstage/core-plugin-api";
import { scaffolderPlugin } from "@backstage/plugin-scaffolder";

import { Entity } from "@backstage/catalog-model";

import { rootRouteRef } from "./routes";
import {
  FieldExtensionComponent,
  createScaffolderFieldExtension,
} from "@backstage/plugin-scaffolder-react";
import {
  SimpleTestField,
  simpleDoNothingValidation,
} from "./components/SimpleTestField";

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

export const SimpleTestFieldExtension: FieldExtensionComponent<string, string> =
  scaffolderPlugin.provide(
    createScaffolderFieldExtension({
      name: "SimpleTestFieldExtension",
      component: SimpleTestField,
      validation: simpleDoNothingValidation,
    })
  );

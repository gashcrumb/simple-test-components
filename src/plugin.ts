import {
  ApiHolder,
  createComponentExtension,
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
import {
  ValidateKebabCase,
  validateKebabCaseValidation,
} from "./components/ValidateKebabCase/ValidateKebabCase";

import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export const DialogIcon = SettingsSuggestIcon;

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
  createComponentExtension({
    name: "SimpleTestComponentsPage",
    component: {
      lazy: () =>
        import("./components/TestInfoCard").then((m) => m.TestInfoCard),
    },
  })
);

export const SimpleDialog = simpleTestComponentsPlugin.provide(
  createComponentExtension({
    name: "SimpleDialog",
    component: {
      lazy: () =>
        import("./components/SimpleDialog/SimpleDialog").then(
          (m) => m.SimpleDialog
        ),
    },
  })
);

export const CustomSearchPage = simpleTestComponentsPlugin.provide(
  createRoutableExtension({
    name: "CustomSearchPage",
    component: () =>
      import("./components/CustomSearchPage").then((m) => m.CustomSearchPage),
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

export const ValidateKebabCaseFieldExtension = scaffolderPlugin.provide(
  createScaffolderFieldExtension({
    name: "ValidateKebabCase",
    component: ValidateKebabCase,
    validation: validateKebabCaseValidation,
  })
);

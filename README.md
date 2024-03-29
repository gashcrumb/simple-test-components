# simple-test-components

This plugin has been extracted out of a normal backstage project and set up as a dynamic plugin that can be loaded into Janus/RHDH to be used as a simple placeholder element.

The most crude way to run the plugin within a Backstage application is by building it and copying the resulting build files and package.json to the dynamic-plugins-root directory in the Backstage showcase application.

Before proceeding, ensure you have set up the [backstage-showcase](https://github.com/janus-idp/backstage-showcase) application and followed the [getting started instructions](https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/getting-started.md).

#### Build Plugin

```bash
yarn install
yarn tsc
yarn build
yarn export-dynamic
```

#### Copy Build Results to Host Application

Navigate to the backstage-showcase repository directory and execute the following commands:

```bash
PLUGIN_DIR=path_to_plugin_repository # replace path_to_plugin_repository with the directory of the plugin
mkdir -p dynamic-plugins-root/janus-idp.backstage-plugin-simple-test-components
cp -r ${PLUGIN_DIR}/package.json ${PLUGIN_DIR}/dist-scalprum dynamic-plugins-root/janus-idp.backstage-plugin-simple-test-components
```

#### Configure dynamicPlugins

Add the example configuration snippet below to your app-config.local.yaml.

```yaml
dynamicPlugins:
  frontend:
    janus-idp.backstage-plugin-simple-test-components:
      dynamicRoutes:
        - path: /admin/rbac
          importName: SimpleTestComponentsPage
        - path: /admin/plugins
          importName: SimpleTestComponentsPage
      mountPoints:
        - mountPoint: admin.page.rbac/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "1 / -1"
              width: 100vw
            props:
              text: "RBAC tab content would be here"
        - mountPoint: admin.page.plugins/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "1 / -1"
              width: 100vw
            props:
              text: "Plugin tab content would be here"
        - mountPoint: entity.page.overview/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumnEnd:
                lg: "span 2"
                md: "span 2"
                xs: "span 2"
            props:
              text: "System card text"
            if:
              allOf:
                - isKind: system
        - mountPoint: entity.page.overview/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumnEnd:
                lg: "span 2"
                md: "span 2"
                xs: "span 2"
            props:
              text: "Component card text"
            if:
              allOf:
                - isKind: component
```

#### Run the Showcase App

```bash
yarn start
```

#### Verify the Plugin was Loaded Correctly

- An "Administration" navigation item should appear above the settings link which has two tabs.
- A green card with the text "System card text" should appear in the system Overview page.
- A green card with the text "Component card text" should appear in the component Overview page.

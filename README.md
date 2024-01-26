# simple-test-components

Welcome to the simple-test-components plugin!

This plugin has been extracted out of a normal backstage project and set up as a dynamic plugin that can be loaded into Janus/RHDH to be used as a simple placeholder element.  For example here is an example setup to get this plugin to show up on some pages using slightly different text content depending on where in the app the component is rendered:

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
              text: 'RBAC tab content would be here'
        - mountPoint: admin.page.plugins/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "1 / -1"
              width: 100vw
            props:
              text: 'Plugin tab content would be here'
```

Building the plugin should be a matter of running `yarn install` followed by `yarn run tsc`, `yarn run build` and then finally `yarn export-dynamic` to build the dynamic plugin.

The most crude way to get this going in a Janus/RHDH instance is to create a directory under `dynamic-plugins-root` called `janus-idp.backstage-plugin-simple-test-components` and then copy this package's `package.json` file and `dist-scalprum` folder into it.

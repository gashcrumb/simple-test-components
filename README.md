# simple-test-components

This plugin has been extracted out of a normal backstage project and set up as a dynamic plugin that can be loaded into Janus/RHDH to be used as a simple placeholder element.

The most crude way to run the plugin within a Backstage application is by building it and copying the resulting build files and package.json to the dynamic-plugins-root directory in the Backstage showcase application.

Before proceeding, ensure you have set up the [backstage-showcase](https://github.com/janus-idp/backstage-showcase) application and followed the [getting started instructions](https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/getting-started.md).

## Build Plugin

```bash
yarn install
yarn tsc
yarn build
```

## Copy Build Results to Host Application

```bash
export DYNAMIC_PLUGINS_ROOT=/path/to/backstage/showcase/dynamic-plugins-root
yarn export-dynamic
```

## Configure dynamicPlugins

Add the example configuration snippet below to your app-config.local.yaml.

```yaml
dynamicPlugins:
  frontend:
    backstage-plugin-simple-test-components:
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

Here is another example configuration featuring some conditionals and customized tabs:

```
dynamicPlugins:
  frontend:
    backstage-plugin-simple-test-components:
      entityTabs:
        - path: /
          title: General
          mountPoint: entity.page.overview
        - path: /api
          title: Api    
          mountPoint: entity.page.api
        - path: /api
          title: Api    
          mountPoint: entity.page.api
        - path: /dependencies
          title: External Things
          mountPoint: entity.page.external
        - path: /foobar
          title: Foobar Things
          mountPoint: entity.page.foobar
      mountPoints:
        - mountPoint: entity.page.foobar/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "1 / 7"
              gridRow: "1 / 5"
            if:
              allOf:
                - isAvailableUsingContext
            props:
              text: 'Some content on the foobar page'
        - mountPoint: entity.page.foobar/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "span 6"
              gridRow: "span 3"
            props:
              text: 'Some other content on the foobar page'
        - mountPoint: entity.page.overview/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "span 1"
              gridRow: "span 1"
            if:
              allOf:
                - isAvailableNo
            props:
              text: 'Content Block One (never available)'
        - mountPoint: entity.page.overview/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "span 1"
              gridRow: "span 1"
            if:
              allOf:
                - isAvailableYes
            props:
              text: 'Content Block Two (always available)'
        - mountPoint: entity.page.overview/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "span 1"
              gridRow: "span 1"
            if:
              allOf:
                - isAvailableUsingContext
            props:
              text: 'Content Block Three (available using context)'
        - mountPoint: entity.page.external/cards
          importName: SimpleTestComponentsPage
          config:
            layout:
              gridColumn: "1 / 1"
            props:
              text: 'Some Content on the Dependencies Page'
```

## Run the Showcase App

```bash
yarn start
```

## Verify the Plugin was Loaded Correctly

- An "Administration" navigation item should appear above the settings link which has two tabs.
- A green card with the text "System card text" should appear in the system Overview page.
- A green card with the text "Component card text" should appear in the component Overview page.

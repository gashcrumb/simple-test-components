import Grid from "@mui/material/Grid";
import React from "react";
import { Content, Header, Page } from "@backstage/core-components";
import { useApp } from "@backstage/core-plugin-api";

import { useScalprum } from "@scalprum/react-core";

function getMountPointData<T = any, T2 = any>({
  mountPoint,
  api = { mountPoints: {} },
}: {
  mountPoint: string;
  api: any;
}): { config: any; Component: T; staticJSXContent: T2 }[] {
  const mountPointComponents = api.mountPoints?.[mountPoint] ?? [];
  return mountPointComponents;
}

const MenuIcon = ({ icon }: { icon: string }) => {
  const app = useApp();
  const Icon = app.getSystemIcon(icon) || (() => null);
  return <Icon />;
};

export const CustomSearchPage = () => {
  const { api } = useScalprum();
  return (
    <Page themeId="home">
      <Header title="A Page with a mount point" />
      <Content>
        <Grid container direction="row">
          <Grid item xs={9}>
            {getMountPointData<React.ComponentType>({
              mountPoint: "custom.mount.point",
              api,
            }).map(({ Component, config }, idx) => {
              const ComponentWithIcon = Component as React.FunctionComponent<{
                icon: React.ReactElement;
              }>;
              return (
                <ComponentWithIcon
                  {...config.props}
                  title={'foo'}
                  key={`search_results_${idx}`}
                  icon={<MenuIcon icon={config.props?.icon || ""} />}
                />
              );
            })}
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};

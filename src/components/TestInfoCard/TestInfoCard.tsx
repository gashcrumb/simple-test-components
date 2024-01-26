import React from "react";
import { Box } from "@mui/material";
import { InfoCard } from "@backstage/core-components";

export type TestInfoProps = {
  text?: string;
};

export const TestInfoCard = ({ text = "Some Text" }) => (
  <InfoCard divider={false}>
    <Box
      sx={{
        background: "#6ca100",
        border: "1px solid #486b00",
        color: "#253600",
        "text-align": "center",
        width: "100%",
        margin: "auto",
      }}
    >
      <br />
      <br />
      {text}
      <br />
      <br />
      <br />
    </Box>
  </InfoCard>
);

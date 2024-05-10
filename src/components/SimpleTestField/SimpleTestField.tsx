import React from "react";

import { FieldExtensionComponentProps } from "@backstage/plugin-scaffolder-react";
import type { FieldValidation } from "@rjsf/utils";

export const SimpleTestField = ({
}: FieldExtensionComponentProps<string>) => {
  return <div>Hi there!</div>;
};

export const simpleDoNothingValidation = (
  _value: string,
  _validation: FieldValidation
) => {};

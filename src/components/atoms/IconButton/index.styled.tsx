import React from "react";
import styled from "styled-components";
import { Size } from ".";

interface ContainerProps {
  disabled?: boolean;
  size?: Size;
  style?: React.CSSProperties;
  color?: string;
  rounded?: boolean;
}

const paddingPicker = ({ size, theme, style, rounded }: any) => {
  if (size === "small" && rounded)
    return `${theme?.spacing["4"]} ${theme?.spacing["4"]}`;
  else if (size === "small" && !rounded)
    return `${theme?.spacing["4"]} ${theme?.spacing["12"]}`;
  else if (size === "medium" && rounded)
    return `${theme?.spacing["8"]} ${theme?.spacing["8"]}`;
  else if (size === "medium" && !rounded)
    return `${theme?.spacing["8"]} ${theme?.spacing["24"]}`;
  else if (size === "large" && rounded)
    return `${theme?.spacing["16"]} ${theme?.spacing["16"]}`;
  else if (size === "large" && !rounded)
    return `${theme?.spacing["12"]} ${theme?.spacing["48"]}`;
  else if (style?.padding) return style?.padding;
  else if (rounded) return `${theme?.spacing["4"]} ${theme?.spacing["4"]}`;
  else `${theme?.spacing["4"]} ${theme?.spacing["12"]}`;
};

export const Container = styled.button<ContainerProps>`
  border: unset;
  cursor: pointer;
  /* background: ${({ style }) => style?.backgroundColor || "red"}; */
  border-radius: ${({ rounded }) => (rounded && "100%") || "unset"};
  padding: ${({ size, theme, style, rounded }) =>
    paddingPicker({ size, theme, style, rounded })};
  > svg {
    > path {
      fill: ${({ color, theme, style }) =>
        (color === "primary" && theme?.palette?.white?.main) ||
        (color === "secondary" && theme?.palette?.purple?.main) ||
        color ||
        style?.color ||
        theme?.palette?.white?.main};
    }
  }
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.palette.grey.light};
    opacity: ${({ theme }) => theme.opacity["40"]};
  }
`;

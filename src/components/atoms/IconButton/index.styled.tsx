import React from "react";
import styled, { css } from "styled-components";
import { ColorEnum, Size, SizeEnum } from ".";

interface ContainerProps {
  disabled?: boolean;
  size?: Size;
  style?: React.CSSProperties;
  color?: string;
}

interface PaddingPicker {
  size?: Size;
  style?: React.CSSProperties;
  color?: string;
  theme?: any;
}

const paddingPicker = ({ size, theme, style }: PaddingPicker) => {
  if (size === SizeEnum.Small)
    return `${theme?.spacing["10"]} ${theme?.spacing["10"]}`;
  else if (size === SizeEnum.Medium)
    return `${theme?.spacing["12"]} ${theme?.spacing["12"]}`;
  else if (size === SizeEnum.Large)
    return `${theme?.spacing["16"]} ${theme?.spacing["16"]}`;
  else if (style?.padding) return style?.padding;
};

interface WidthHeightPicker {
  size?: string;
}

const widthHeightPicker = ({ size }: WidthHeightPicker) => {
  let style = { width: "20px", height: "20px" };

  if (size === SizeEnum.Small)
    style = {
      width: "12px",
      height: "12px",
    };
  else if (size === SizeEnum.Medium) style = { width: "16px", height: "16px" };

  return style;
};

interface FillPicker {
  style?: React.CSSProperties;
  color?: string;
  theme?: any;
}

const fillPicker = ({ color, theme, style }: FillPicker) => {
  if (color === ColorEnum.Primary) return theme?.palette?.grey?.dark;
  else if (color === ColorEnum.Secondary) return theme?.palette?.purple?.main;
  else if (color) return color;
  else if (style?.color) return style.color;
  else return theme?.palette?.grey?.main;
};

export const Container = styled.button<ContainerProps>`
  border: unset;
  cursor: pointer;
  background-color: unset;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    ${widthHeightPicker}
    > path {
      fill: ${fillPicker};
    }
  }
  padding: ${paddingPicker};
  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover,
          &:active {
            background-color: ${({ theme }) => theme.palette.grey.light};
            opacity: ${({ theme }) => theme.opacity["100"]};
          }
        `
      : css`
          > svg {
            ${widthHeightPicker}
            > path {
              fill: ${({ theme }) => theme.palette.grey.main};
            }
          }
        `}
`;

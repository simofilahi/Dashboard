import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./index.styled";

export type Size = "small" | "medium" | "large";

export enum SizeEnum {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum ColorEnum {
  Primary = "primary",
  Secondary = "secondary",
}

interface IconButtonProps {
  children?: JSX.Element;
  disabled?: boolean;
  size?: Size;
  style?: React.CSSProperties;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    children,
    disabled = false,
    size = SizeEnum.Small,
    style,
    color = ColorEnum.Primary,
    onClick,
  } = props;

  return (
    <Container
      size={size}
      disabled={disabled}
      style={style}
      color={color}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default IconButton;
